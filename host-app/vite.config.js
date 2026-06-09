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
          "https://employeesfederation.onrender.com/assets/remoteEntry.js",
        asset_management:
          "https://assetmanagementsystem-0sqh.onrender.com/assets/remoteEntry.js",
        helpdesk:
          "https://helpdesk-frontend-45xw.onrender.com/assets/remoteEntry.js",
        inventory:
          "https://inventorymanagement-rm.onrender.com/assets/remoteEntry.js"

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
        "react-router": {
          singleton: true,
          requiredVersion: false,
        },
        "react-router-dom": {
  singleton: true,
  requiredVersion: false,
}
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