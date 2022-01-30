import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Logo from "../assets/logo-resized.png";
import Open from "../assets/open-hours.png";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className="container mt-2">
      <Row className="d-flex justify-content-between align-items-end">
        <Col md={6} sm={12} className="py-2">
          <Link href={"/"}>
            <a className={styles.logo}>
              <Image
                src={Logo}
                alt="Logo"
                min-width="100%"
                min-height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </a>
          </Link>
        </Col>
        <Col md={5} xs={8} className="py-2 mx-auto">
          <div>
            <Image
              src={Open}
              alt="Open hours"
              min-width="100%"
              min-height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
