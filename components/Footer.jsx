import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import footerData from "../data/footerData";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footer} p-5`}>
        <div className="container">
          <Row>
            {footerData.map((item, index) => {
              return (
                <Col
                  lg={4}
                  md={6}
                  sm={12}
                  className="d-flex justify-content-sm-start align-items-center "
                  key={index}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="d-none d-sm-block my-2 mx-2"
                    width={30}
                  />
                  <Link href={"/"}>
                    <a>
                      <h4 className={`${styles.text} p-1 mb-0`}>
                        {item.title}
                      </h4>
                    </a>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        <p lg={6} md={12}>
          All Rights Reserved ® www.Baudiscount-Garagen.de Copyright 2004 - 2022
        </p>

        <div lg={6} md={12} className="d-flex justify-content-center">
          <Link href={"/"}>
            <a>
              <FontAwesomeIcon icon={faFacebook} className={styles.social} />
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <FontAwesomeIcon icon={faTwitter} className={styles.social} />
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <FontAwesomeIcon icon={faYoutube} className={styles.social} />
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <FontAwesomeIcon icon={faInstagram} className={styles.social} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
