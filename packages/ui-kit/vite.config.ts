import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
  ],
  build: {
    outDir: "./dist",
    lib: {
      entry: "./src/index.ts",
      name: "ui-kit",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // assetFileNames: (assetInfo) => {
        //   if (assetInfo.name === "style.css") {
        //     return "index.css";
        //   }
        //   return assetInfo.name!;
        // },
      },
    },
  },
});
