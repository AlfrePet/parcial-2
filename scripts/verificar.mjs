// Comprueba los archivos y enlaces locales de las páginas que se entregan.
import { readFile, readdir, access } from "node:fs/promises";
import path from "node:path";
const root = process.cwd();
const pages = (await readdir(root)).filter((name) => name.endsWith(".html"));
let checks = 0;
const failures = [];
for (const page of pages) {
  const source = await readFile(page, "utf8");
  const h1 = [...source.matchAll(/<h1(?:\s[^>]*)?>/g)];
  if (h1.length !== 1) failures.push(`${page}: debe tener un h1.`);
  for (const tag of ["header", "nav", "main", "footer"]) {
    if (!source.includes(`<${tag}`)) failures.push(`${page}: falta ${tag}.`);
  }
  if (!source.includes('lang="es"')) failures.push(`${page}: idioma ausente.`);
  for (const match of source.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = match[1];
    if (/^(https?:|mailto:|data:)/.test(target)) continue;
    const [file, fragment] = target.split("#");
    const fullPath = path.join(root, file || page);
    checks++;
    try {
      await access(fullPath);
      if (fragment && (!file || file.endsWith(".html"))) {
        const html = file ? await readFile(fullPath, "utf8") : source;
        if (!html.includes(`id="${fragment}"`))
          failures.push(`${page}: ancla sin destino ${target}.`);
      }
    } catch {
      failures.push(`${page}: recurso ausente ${target}.`);
    }
  }
  for (const image of source.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]*"/.test(image[0]))
      failures.push(`${page}: imagen sin texto alternativo.`);
  }
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `${pages.length} páginas y ${checks} referencias locales verificadas.`,
  );
