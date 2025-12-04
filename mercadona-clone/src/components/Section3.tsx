import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from "./Section2.module.css";

const Section3 = () => {
  return (
    <section className={styles.section3}>
      <Container>
        <Row className="align-items-center justify-content-center gy-4 column-gap-4">
          <Col md={5} className="order-1 order-md-2">
            <div>
                <h2 className={styles.title}>Nueva tienda online en algunas zonas</h2>
                <p className={styles.description}>
                Por el momento, la nueva app y web está disponible en Valencia, Barcelona, Madrid y otras poblaciones. 
                Introduce tu código postal arriba para ver si repartimos en tu zona. Si aún no llegamos, ¡apúntate y te avisamos!
                </p>
                <a href="#" className={styles.Link}>Avísame</a>
            </div>
          </Col>

          <Col md={5} className="order-2 order-md-1">
              <Image
                src="/cuadro2.jpeg"
                alt="Nueva tienda online"
                fluid
              />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section3;