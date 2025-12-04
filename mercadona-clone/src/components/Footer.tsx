import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Youtube, Instagram, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const sections = [
    { title: 'Cliente', links: ['Supermercados', 'Consejos', 'Factura cliente'] },
    { title: 'Trabajador', links: ['Trabaja con nosotros'] },
    { title: 'Proveedor', links: ['Factura-Me', 'Portal Trinidad'] },
    { title: 'Sociedad', links: ['Actualidad', 'Sala de prensa', 'Conoce Mercadona', 'Mercadona en Portugal', 'Cuidemos el Planeta'] }
  ];

  return (
    <footer className={`${styles.customFooter} pt-5 pb-4`}>
      <Container>
        <Row>
          {sections.map((section, index) => (
            <Col xs={6} md={2} key={index} className="mb-4">
              <h6 className="fw-bold text-white mb-3">{section.title}</h6>
              <ul className="list-unstyled">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-decoration-none ${styles.footerLink}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          <Col xs={12} md={4} className="ms-auto text-md-end">
            <div className="d-flex align-items-center justify-content-md-end mb-3 text-white">
              <div className="me-2">
                <img src="/iconofooter.png" height="32" alt="Teléfono" />
              </div>
              <span className="fs-4 fw-bold">800 500 220</span>
            </div>
            
            <div className="d-flex gap-2 justify-content-md-end mb-4 mb-md-0">
              <a href="#" className={styles.socialBox}><Mail size={16} /></a>
              <a href="#" className={styles.socialBox}><Facebook size={16} /></a>
              <a href="#" className={styles.socialBox}>𝕏</a>
              <a href="#" className={styles.socialBox}><Youtube size={16} /></a>
              <a href="#" className={styles.socialBox}><Instagram size={16} /></a>
              <a href="#" className={styles.socialBox}><Linkedin size={16} /></a>
            </div>
          </Col>
        </Row>

        <Row className="mt-2 mb-5">
          <Col md={6} className="text-center text-md-start mb-2">
            <small className="text-white-50">© Mercadona S.A. A46103834. Todos los derechos reservados.</small>
          </Col>
          
          <Col md={6} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 flex-wrap">
                <a href="#" className={`text-decoration-none ${styles.legalLink}`}>Accesibilidad</a>
                <a href="#" className={`text-decoration-none ${styles.legalLink}`}>Política de privacidad</a>
                <a href="#" className={`text-decoration-none ${styles.legalLink}`}>Política de cookies</a>
                <a href="#" className={`text-decoration-none ${styles.legalLink}`}>Términos y condiciones</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;