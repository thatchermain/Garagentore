import React from "react";
import Product from "../assets/product.jpg";
import { Card, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/ProductCard.module.scss";

const ProductCard = (props) => {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.text}>{props.title}</div>
      <div className={styles.image}>
        <Image
          src={Product}
          alt="Logo"
          min-width="100%"
          min-height="100%"
          layout="responsive"
          objectFit="contain"
        />
        <div className={styles.overlay}>
          <h4 className={styles.cta}>bitte anklicken</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
