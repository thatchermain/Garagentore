import Link from "next/link";
import {
  Nav,
  Dropdown,
  DropdownButton,
  Navbar,
  Container,
} from "react-bootstrap";
import styles from "../styles/Navbar.module.scss";

const NavbarLg = () => {
  return (
    <nav className={`d-none d-md-block p-2 mt-4 ${styles.navbar}`}>
      <Navbar variant="light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container text-light text-uppercase d-flex justify-content-around align-items-center h4">
              <Link href="/">
                <a className={styles.link}>startseite</a>
              </Link>
              <DropdownButton title="PRODUKTE" variant="warning">
                <Dropdown.Item className={`${styles.dropdownlink}`}>
                  <Link href="/produkte/garagentore">
                    <a className={`${styles.dropdownlink}`}>Garagentore</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className={`${styles.dropdownlink}`}>
                  <Link href="/produkte/turen">
                    <a className={`${styles.dropdownlink}`}>Türen</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className={`${styles.dropdownlink}`}>
                  <Link href="/produkte/fertiggaragen">
                    <a className={`${styles.dropdownlink}`}>Fertiggaragen</a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className={`${styles.dropdownlink}`}>
                  <Link href="/produkte/gartenhauser-und-nebengebaude">
                    <a className={`${styles.dropdownlink}`}>
                      Gartenhäuser & Nebengebäude
                    </a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className={`${styles.dropdownlink}`}>
                  <Link href="/produkte/trennwandsysteme">
                    <a className={`${styles.dropdownlink}`}>Trennwandsysteme</a>
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
              <Link href="/konfigurator" className="text-primary">
                <a className={styles.link}>konfigurator</a>
              </Link>
              <Link href="/info">
                <a className={styles.link}>info+</a>
              </Link>
              <Link href="/kontakt">
                <a className={styles.link}>kontakt</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavbarLg;
