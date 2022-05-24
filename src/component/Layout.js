import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
export default function Layout() {
  return (
    <div id="layout">
      <div id="nav">
        <Navigation />
      </div>
      <div id="cde">
        <Outlet />
      </div>
    </div>
  );
}
