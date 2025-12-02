import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './Section2.module.css';

const Section2 = () => {
  return (
    <section className={styles.section2}>
      <Container>
        <Row className="align-items-center justify-content-center column-gap-4">
          <Col md={5} className="mb-4 mb-md-0 text-center text-md-start">
            <div className={styles.contentWrapper}>
              <h2 className={styles.title}>Compra online</h2>
              <p className={styles.description}>
                Recibe tu pedido en casa con la misma calidad y frescura de siempre.
              </p>
            </div>
          </Col>
          <Col md={5}>
            <Image 
              src="/cuadro1.jpeg" 
              alt="Compra online en Mercadona" 
              fluid 
              className={styles.image}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section2;