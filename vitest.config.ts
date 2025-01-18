import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.test.tsx", "**/*.spec.tsx", "**/*.spec.ts"],
    setupFiles: ["./test/setup.ts"],
    coverage: {
      provider: "istanbul",
    },
  },
});
