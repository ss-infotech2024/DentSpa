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
    const frontendPath = path.join(__dirname, "../dist/spa"); // Updated path
    app.use(express.static(frontendPath));

    // SPA fallback for client-side routing
    app.get("*", (req, res) => {
      res.sendFile(path.join(frontendPath, "index.html"));
    });
  }

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  return app;
}

// If this file is run directly (Render will call npm start)
if (import.meta.url === `file://${process.argv[1]}`) {
  const port = process.env.PORT || 3000;
  const app = createServer();
  app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
  });
}
