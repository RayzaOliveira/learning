import React from "react";

import { Routes, Route, Link, Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";

import Dashboard from "./pages/Home";
import Login from "./pages/Login";

import Profile from "./pages/Profile";

const PrivateRoute = (props: any) => {
  return isAuthenticated() ? <Route {...props} /> : <Navigate to="/login" />;
};

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />

      <PrivateRoute path="/profile" element={<Profile />}>
        <Route path="purchases" element={<h1>Compras</h1>} />
        <Route
          path="/password"
          element={
            <>
              <h1> Alterar Senha</h1>
              <Link to="/">Compras</Link>
            </>
          }
        />
      </PrivateRoute>

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
