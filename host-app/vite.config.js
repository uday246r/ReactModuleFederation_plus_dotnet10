import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({

  plugins: [

    react(),

    federation({

      name: "host",

      remotes: {
        employee_mf:
          "http://localhost:5001/assets/remoteEntry.js",
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: false,
        },

        "react-dom": {
          singleton: true,
          requiredVersion: false,
        },
      },
    }),
  ],

  build: {
    target: "esnext",
  },

  server: {
    port: 3000,
    cors: true,
  },
});