import React from "react";
import footerData from "../data/footerData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Col, Row } from "react-bootstrap";
import { icon } from "@fortawesome/fontawesome-svg-core";
import AG from "../assets/footer-icons/AG.svg";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import LogoFooter from "../assets/logoSmallNoText.png";
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="links">
      <div className={`${styles.footer} p-5`}>
        <div className="">
          <Row className="">
            {footerData.map((item) => {
              return (
                <Col
                  lg={4}
                  md={6}
                  sm={12}
                  className="d-flex justify-content-sm-start align-items-center "
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`${styles.icon}`}
                  />
                  <h4 className={styles.text}>{item.title}</h4>
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
          <FontAwesomeIcon icon={faFacebook} className={styles.social} />
          <FontAwesomeIcon icon={faTwitter} className={styles.social} />
          <FontAwesomeIcon icon={faYoutube} className={styles.social} />
          <FontAwesomeIcon icon={faInstagram} className={styles.social} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
