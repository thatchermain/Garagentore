import Image from "next/image";
import Product from "../assets/product.jpg";
import styles from "../styles/ProductCard.module.scss";

const ProductCard = (props) => {
  return (
    <div className={`${styles.card} p-1 my-4`}>
      <div className={styles.text}>{props.title}</div>
      <div className={styles.image}>
        <Image
          src={Product}
          alt="Product image"
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
