// Servidor local sin dependencias. Ejecutar: npm run dev
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 5500);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
};
http
  .createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://localhost:${port}`);
      const relative =
        decodeURIComponent(url.pathname).replace(/^\/+/, "") || "index.html";
      const segments = relative.split(/[\\/]/);
      const file = path.resolve(root, relative);
      const inside = path.relative(root, file);
      if (
        segments.some(
          (part) =>
            part.startsWith(".") ||
            ["tmp", "node_modules", "output"].includes(part),
        ) ||
        inside.startsWith("..") ||
        path.isAbsolute(inside)
      ) {
        res.writeHead(403).end("Acceso no permitido");
        return;
      }
      const info = await stat(file);
      if (!info.isFile()) throw new Error("Not a file");
      const content = await readFile(file);
      res.writeHead(200, {
        "Content-Type": mime[path.extname(file)] || "application/octet-stream",
        "Cache-Control": "no-cache",
      });
      res.end(content);
    } catch {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(await readFile(path.join(root, "404.html")));
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Nexo listo en http://localhost:${port}`),
  );
