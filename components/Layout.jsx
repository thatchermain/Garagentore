import React from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import NavbarLg from "./Navbar";
import Offcan from "./Offcan";

const Layout = ({ children }) => {
  return (
    <div>
      <Header className="" />
      <Offcan />

      <NavbarLg />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
