import React, { useState } from "react";
import styles from "../styles/Offcan.module.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import {
  Row,
  Nav,
  NavDropdown,
  Dropdown,
  DropdownButton,
  Navbar,
  Container,
} from "react-bootstrap";
import OffCanvasContent from "./OffCanvasContent";

const Offcan = () => {
  return (
    <div className={`d-block d-md-none p-0 ${styles.navbar}`}>
      <Navbar expand={false}>
        <Container fluid className="d-flex ">
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <div className={`${styles.menulinks} `}>
            <Link href={"/"}>
              {/* <a className="list-group-item"> Garagentore</a> */}
              <a className={`${styles.navlink} py-2 px-2`}>Startseite</a>
            </Link>
            <Link href={"/produkte"}>
              <a className={`${styles.navlink} ${styles.midlink} py-2 px-2`}>
                Produkte
              </a>
            </Link>
            <Link href={"/kontakt"}>
              <a className={`${styles.navlink} py-2 px-2`}>Kontakt</a>
            </Link>
          </div>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            bg="dark"
          >
            <Offcanvas.Header
              className={styles.offBody}
              closeButton
            ></Offcanvas.Header>
            <Offcanvas.Body className={styles.offBody}>
              <OffCanvasContent />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Offcan;
