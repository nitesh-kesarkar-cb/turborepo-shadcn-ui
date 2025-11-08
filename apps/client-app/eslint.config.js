import { config } from "@repo/eslint-config/vite";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  ...config,
]);
