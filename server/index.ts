import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { handleDemo } from "./routes/demo.js"; // Added .js for ES modules

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Resolve __dirname in ES Modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Serve frontend (React build) in production
  if (process.env.NODE_ENV === "production") {
    const frontendPath = path.join(__dirname, "../frontend/build");
    app.use(express.static(frontendPath));

    // Catch-all route for SPA
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(frontendPath, "index.html"));
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
