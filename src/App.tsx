import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ForgotPassword } from "./pages/forgotPassword";
import { Dashboard } from "./pages/Dashboard";
import { MainLayout } from "../src/layout/MainLayout";
import ProjectsPage from "./pages/projects";
import AddProjectPage from "./pages/addProjectPage";
import EstimationList from "./pages/estimationList";
import AddEstimation from "./pages/AddEstimation";

const AuthenticatedRoute = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};
export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            <AuthenticatedRoute>
              <Dashboard />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/project"
          element={
            <AuthenticatedRoute>
              <ProjectsPage />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/add-project"
          element={
            <AuthenticatedRoute>
              <AddProjectPage />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/estimates"
          element={
            <AuthenticatedRoute>
              <EstimationList />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/addEstimate"
          element={
            <AuthenticatedRoute>
              <AddEstimation />
            </AuthenticatedRoute>
          }
        />
        
      </Routes>
    </Router>
  );
}
