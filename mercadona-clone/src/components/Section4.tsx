import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import styles from "./section4.module.css";

const Section4 = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <h1 className={`mb-3 ${styles.title}`}>
              Empieza tu compra <br /> en Mercadona
            </h1>
            
            <div className="d-flex flex-column flex-sm-row gap-2 mb-4" style={{ maxWidth: '460px' }}>
               <div className="flex-grow-1">
                <FloatingLabel controlId="floatingInputSection4" label="Código postal" className="text-muted">
                  <Form.Control 
                    type="text" 
                    placeholder="Código postal" 
                    className={`shadow-sm border-0 ${styles.inputField}`}
                  />
                </FloatingLabel>
               </div>
               <Button className={`btn-lg fw-bold px-5 shadow-sm ${styles.enterButton}`}>
                 ENTRAR
               </Button>
            </div>

            <p className={`text-muted mb-4 ${styles.infoText}`}>
              O descarga la App y haz tu compra en cualquier momento.
            </p>

            <div className="d-flex gap-3">
              <img src="/playstore.svg" alt="Google Play" className={styles.storeImg} />
              <img src="/appstore.svg" alt="App Store" className={styles.storeImg} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section4;  