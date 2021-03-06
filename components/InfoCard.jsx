import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/InfoCard.module.scss";

const InfoCard = (props) => {
  return (
    <Link href={"/"}>
      <div
        className={`${styles.card} d-flex flex-column justify-content-around align-items-center p-3 `}
      >
        <h3 className={styles.title}>{props.title}</h3>
        <FontAwesomeIcon className={styles.icon} icon={props.icon} />
        <p className={styles.text}>{props.text}</p>
        <button className={styles.btn}>BITTE ANKLICKEN</button>
      </div>
    </Link>
  );
};

export default InfoCard;
