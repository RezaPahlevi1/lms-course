import React from "react";
import { Outlet } from "react-router-dom";

export default function ModuleLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
