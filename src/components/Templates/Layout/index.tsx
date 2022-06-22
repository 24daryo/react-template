import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Title } from "./Title";

// 1. default
function Layout() {
  return (
    <>
      <Header />
      <Title />
      <Outlet />
    </>
  );
}

export default Layout;
