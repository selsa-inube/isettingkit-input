import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dst from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "styled-components",
        "react-icons/md",
        "formik",
        "yup",
        "@inubekit/button",
        "@inubekit/checkbox",
        "@inubekit/divider",
        "@inubekit/date",
        "@inubekit/foundations",
        "@inubekit/grid",
        "@inubekit/icon",
        "@inubekit/input",
        "@inubekit/stack",
        "@inubekit/text",
        "@inubekit/textarea",
        "@inubekit/toggle",
        "@inubekit/select",
        "@inubekit/tag",
      ],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react(), dst({ rollupTypes: true })],
});
