import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { lazy, Suspense } from "react";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import MainLayout from "../layouts/MainLayout";

import ProtectedRoute from "../components/ProtectedRoute";

const EmployeeApp = lazy(() =>
  import("employee_mf/EmployeeApp")
);

const AssetApp = lazy(() =>
  import("asset_management/AssetApp")
);

const HelpdeskApp = lazy(() =>
  import("helpdesk/HelpdeskApp")
);

const ExampleComponent = lazy(() =>
  import("inventory/App")
);

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/employees/*"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Suspense fallback={<h2>Loading...</h2>}>
                  <EmployeeApp />
                </Suspense>
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/inventory/*"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Suspense fallback={<h2>Loading...</h2>}>
                  <App />
                </Suspense>
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/assets/*"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Suspense fallback={<h2>Loading...</h2>}>
                  <AssetApp />
                </Suspense>
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/helpdesk/*"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Suspense fallback={<h2>Loading...</h2>}>
                  <HelpdeskApp />
                </Suspense>
              </MainLayout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;