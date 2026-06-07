import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import federation from "@originjs/vite-plugin-federation";

export default defineConfig({

  plugins: [

    react(),

    federation({

      name: "employee_mf",

      filename: "remoteEntry.js",

      exposes: {
        "./EmployeeApp": "./src/App.jsx",
      },

      shared: ["react", "react-dom"],
    }),
  ],

  server: {
    port: 5001,
  },
});