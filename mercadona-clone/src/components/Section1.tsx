import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import styles from './Section1.module.css';

const Section1 = () => {
  return (
    <section className={`${styles.heroSection} d-flex align-items-center`}>
      <Container>
        <Row className="justify-content-end">
          <Col lg={5} md={6}>
            <h1 className={styles.title}>
              Empieza tu compra <br /> en Mercadona
            </h1>
            <p className={`text-muted mb-4 ${styles.subtitle}`}>
              Introduce tu código postal y dependiendo de tu ciudad accederás a la nueva compra online o a la web clásica.
            </p>
            <div className="d-flex flex-column flex-md-row gap-2" style={{ maxWidth: '460px' }}>
              <div className="flex-grow-1">
                <FloatingLabel 
                  controlId="floatingInput" 
                  label="Código postal"
                  className="text-muted"
                >
                  <Form.Control 
                    type="text" 
                    placeholder="Código postal"
                    aria-label="Código postal"
                    className={`shadow-sm border-0 ${styles.inputField}`}
                  />
                </FloatingLabel>
              </div>
              <Button className={`btn-lg fw-bold px-5 shadow-sm ${styles.enterButton}`}>
                ENTRAR
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;