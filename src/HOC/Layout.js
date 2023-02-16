import React from "react";
import Footer from "../Components/HomePages/Footer";
import Header from "../Components/HomePages/Header";
import MoveToTop from "../Components/HomePages/MoveToTop";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <MoveToTop />
    </div>
  );
}
