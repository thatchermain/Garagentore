import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavMenu from "./NavMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <Header className="" />
      <NavMenu />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
