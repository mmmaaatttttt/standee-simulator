import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      containers: "/src/containers",
      contexts: "/src/contexts",
      hooks: "/src/hooks",
      providers: "/src/providers",
    },
  },
});
