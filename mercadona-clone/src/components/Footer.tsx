
import { Facebook, Youtube, Instagram, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.customFooter} text-white py-5`}>
      <div className="container">
        
        <div className="row gy-4">
          
          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Cliente</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#" className={styles.footerLink}>Supermercados</a></li>
              <li><a href="#" className={styles.footerLink}>Consejos</a></li>
              <li><a href="#" className={styles.footerLink}>Factura cliente</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Trabajador</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#" className={styles.footerLink}>Trabaja con nosotros</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Proveedor</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#" className={styles.footerLink}>Factura-Me</a></li>
              <li><a href="#" className={styles.footerLink}>Portal Trinidad</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Sociedad</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="#" className={styles.footerLink}>Actualidad</a></li>
              <li><a href="#" className={styles.footerLink}>Sala de prensa</a></li>
              <li><a href="#" className={styles.footerLink}>Conoce Mercadona</a></li>
              <li><a href="#" className={styles.footerLink}>Mercadona en Portugal</a></li>
              <li><a href="#" className={styles.footerLink}>Cuidemos el Planeta</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4 text-md-end">
            
            <div className="d-flex align-items-center justify-content-md-end mb-3">
              
              <img 
                src="/public/iconofooter.png" 
                alt="Teléfono" 
                width="32" 
                height="32" 
                className="me-2" 
                style={{ objectFit: 'contain' }} 
              />
              
              <span className="fs-4 fw-bold">800 500 220</span>
            </div>
            
            <div className="d-flex gap-2 justify-content-md-end">
              <a href="#" className={styles.socialBox}><Mail size={18} /></a>
              <a href="#" className={styles.socialBox}><Facebook size={18} /></a>
              <a href="#" className={styles.socialBox} style={{fontWeight:'bold'}}>𝕏</a>
              <a href="#" className={styles.socialBox}><Youtube size={18} /></a>
              <a href="#" className={styles.socialBox}><Instagram size={18} /></a>
              <a href="#" className={styles.socialBox}><Linkedin size={18} /></a>
            </div>
          </div>

        </div>

        <div className="row mt-5 pt-3 border-top border-secondary">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <small className="text-white-50">© Mercadona S.A. A46103834. Todos los derechos reservados.</small>
          </div>
          
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex gap-3 justify-content-center justify-content-md-end">
              <a href="#" className={styles.legalLink}>Accesibilidad</a>
              <a href="#" className={styles.legalLink}>Política de privacidad</a>
              <a href="#" className={styles.legalLink}>Política de cookies</a>
              <a href="#" className={styles.legalLink}>Términos y condiciones</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;