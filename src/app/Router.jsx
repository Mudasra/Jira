import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import ProjectList from "../pages/ProjectList";
import Backlog from "../pages/Backlog";
import Board from "../pages/Board";
import Settings from "../pages/Settings";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<ProjectList />} />
        <Route path="projects/:projectId/backlog" element={<Backlog />} />
        <Route path="projects/:projectId/board" element={<Board />} />
        <Route path="projects/:projectId/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default Router;
