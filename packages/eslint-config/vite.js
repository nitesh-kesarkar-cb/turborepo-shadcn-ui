import reactRefresh from "eslint-plugin-react-refresh";
import { config as reactInternalConfig } from "./react-internal.js";

/**
 * A custom ESLint configuration for Vite React apps.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  ...reactInternalConfig,
  reactRefresh.configs.vite,
];

