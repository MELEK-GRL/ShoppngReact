import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function HomeLayout() {
  return (
    <div className="w-full flex flex-col  justify-between items-center">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
