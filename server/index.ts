import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { handleDemo } from "./routes/demo.js"; // API route

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Resolve __dirname in ES Modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Serve Vite build in production
  if (process.env.NODE_ENV === "production") {
    const frontendPath = path.join(__dirname, "../dist/spa");
    app.use(express.static(frontendPath));

    // SPA fallback for client-side routing
    app.get("*", (req, res) => {
      res.sendFile(path.join(frontendPath, "index.html"));
    });
  }

  // API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: process.env.PING_MESSAGE ?? "ping" });
  });

  app.get("/api/demo", handleDemo);

  return app;
}

// Start the server only if run directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = process.env.PORT || 3000; // Always use Render's assigned port
  const app = createServer();
  app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
  });
}
