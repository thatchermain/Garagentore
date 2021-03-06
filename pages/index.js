import Head from "next/head";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import InfoCard from "../components/InfoCard";

import styles from "../styles/Home.module.scss";

import {
  sectionOneTitle,
  sectionTwoTitle,
  sectionThreeTitle,
  sectionFourTitle,
} from "../data/contentTitles";
import infoCards from "../data/infoCards";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Garagentore</title>
        <meta name="description" content="Garagentor online Konfigurator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoSmallGarage.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="container ">
        <div className="info">
          <h2 className="display-5 my-5">Garagentor online Konfigurator</h2>
          <h3 className="text-secondary">
            Garagentore in verschiedenen Ausführungen
          </h3>
          <p className="text-secondary">
            Für jede Garage gibt es auch ein passendes Tor also ein Garagentor.
            Damit ist nicht nur das Maß gemeint, sondern auch die Ausstattung
            sowie die farbliche Gestaltung. Für Fertiggaragen oder auch für
            aufgemauerte Garagen gibt es beispielsweise Schwingtore. Diese
            gehören sozusagen zu den Klassikern in diesem Bereich. Sie sind
            recht günstig, einfach zu bedienen und halten sehr lange. Etwas
            aufwendiger konstruiert sind Sektionaltore oder Rolltore. Der
            Vorteil dieser Tore liegt darin, dass sie in der Regel eine höhere
            lichte Durchfahrtshöhe erlauben. Ähnlich ist es auch bei Rollgitter.
            Holz Garagentore gelten als besonder Edel und Elegant.
          </p>
          <h3 className="text-secondary">
            Doppelflügeltore wirken besonders edel
          </h3>
          <p className="text-secondary">
            Tore, die aus zwei öffnenden Flügeln bestehen, anders Garagen
            Flügeltor wirken in ganz besonderer Weise ansprechend als
            Garagentor. Diese sind zumeist aus Profilblechen hergestellt. Daher
            können Sie wählen, ob die Profile hochkant oder quer verlaufen
            sollen. Unterschiede in der Stabilität treten dabei nicht auf. Die
            Anordnung der Profile dient ausschließlich den optischen Reizen.
            Zudem ist bei jedem Doppeltor wählbar, ob sich zuerst die linke oder
            die rechte Seite öffnen soll. Daher stehen dem Interessenten
            zahlreiche unterschiedliche Ausführungen zur Wahl. Für alle Tore,
            auch für die Industrietore stehen auch elektrische Antriebe zur
            Verfügung. Diese lassen sich leicht einbauen und bieten einen
            besonders hohen Komfort. Welches Tor und welche Ausstattung sich der
            Garagenbesitzer wünscht, hängt in erster Linie von seinem ganz
            persönlichen Geschmack ab. Die Tore stehen auch in vielen Größen und
            Materialien zur Auswahl unter anderem Stahl und Aluminium, aber
            besonder Elegant ist das Holz Garagentor.
          </p>
          <p className={styles.bottomText}>
            Bitte wählen Sie hier Zwischen den Produkten die Sie{" "}
            <span className={styles.span}>KOSTENLOS & UNVERBINDLICH</span>{" "}
            Anfragen möchten – und wir erstellen Ihnen hierzu das Angebot!
          </p>
          <p className={styles.bottomText}>
            Wir Liefern{" "}
            <span className={styles.span}>Bundes und Europaweit!</span> Mit und
            ohne Entladung.
          </p>
          <p className={styles.bottomText}>
            Es fallen <span className={styles.span}>keine Lieferkosten</span>{" "}
            an, Sie zahlen nur für das Produkt,{" "}
            <span className={styles.span}>die Lieferung ist Kostenlos!</span>
          </p>
          <p className={styles.bottomText}>
            Das Angebot erhalten Sie selbstverständlich{" "}
            <span className={styles.span}>
              Schnell & Kostenlos & Unverbindlich!
            </span>
          </p>
        </div>
      </section>
      <div className=" container garagentore">
        <h2>GARAGENTORE</h2>
        <hr></hr>
        <h3 className="text-secondary">» Garagen Sektionaltore & Rolltore:</h3>
        <Row className="justify-content-lg-start justify-content-sm-center mb-3">
          {sectionOneTitle.map((item, index) => (
            <ProductCard key={index} title={item} />
          ))}
        </Row>
        <p>* gilt bei einem Referenz Tor mit den Maßen 5000 x 2500 mm</p>
        <h3 className="text-secondary">» Garagen Doppelflügeltore:</h3>
        <Row className="justify-content-lg-start justify-content-sm-center mb-5">
          {sectionTwoTitle.map((item, index) => (
            <ProductCard key={index} title={item} />
          ))}
        </Row>
        <h3 className="text-secondary">» Garagen Schwingtore:</h3>
        <Row className="justify-content-lg-start justify-content-sm-center mb-5">
          {sectionThreeTitle.map((item, index) => (
            <ProductCard key={index} title={item} />
          ))}
        </Row>
        <h3 className="text-secondary">» Industrietore:</h3>
        <Row className="justify-content-lg-start justify-content-sm-center">
          {sectionFourTitle.map((item, index) => (
            <ProductCard key={index} title={item} />
          ))}
        </Row>
      </div>
      <div className="bg-primary mt-5 ">
        <div className="container ">
          <Row>
            {infoCards.map((item, index) => {
              return (
                <Col
                  key={index}
                  className={`${styles.infoColumn} d-flex flex-column justify-contens-between align-items-betwwen align-items-sm-center`}
                  lg={4}
                  md={6}
                  sm={12}
                >
                  <InfoCard
                    title={item.title}
                    text={item.text}
                    icon={item.icon}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
