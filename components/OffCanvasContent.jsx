import Link from "next/link";
import styles from "../styles/Offcan.module.scss";

const OffCanvasContent = () => {
  return (
    <div>
      <div className="py-3">
        <h5>PRODUKTE</h5>
        <ul className="list-group">
          <Link href={"/produkte/garagentore"}>
            <a className={`${styles.link} py-1`}> Garagentore</a>
          </Link>
          <Link href={"/produkte/turen"}>
            <a className={`${styles.link} py-1`}>Türen</a>
          </Link>
          <Link href={"/produkte/fertiggaragen"}>
            <a className={`${styles.link} py-1`}>Fertiggaragen</a>
          </Link>
          <Link href={"/produkte/gartenhauser-und-nebengebaude"}>
            <a className={`${styles.link} py-1`}>Gartenhäuser & Nebengebäude</a>
          </Link>
          <Link href={"/produkte/trennwandsysteme"}>
            <a className={`${styles.link} py-1`}>Trennwandsysteme</a>
          </Link>
        </ul>
      </div>
      <div className="info py-3">
        <h5>INFO +</h5>
        <ul className="list-group list-group-flush">
          <Link href={"/angebotserstellung"}>
            <a className={`${styles.link} py-1`}>
              Kostenlose Angebotserstellung
            </a>
          </Link>
          <Link href={"/info-plus"}>
            <a className={`${styles.link} py-1`}>Info +</a>
          </Link>
          <Link href={"/uber-uns"}>
            <a className={`${styles.link} py-1`}>Über Uns</a>
          </Link>
          <Link href={"/impressum"}>
            <a className={`${styles.link} py-1`}>Impressum</a>
          </Link>
          <Link href={"/agb"}>
            <a className={`${styles.link} py-1`}>AGB</a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvasContent;
