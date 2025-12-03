import { Facebook, Youtube, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  // Definimos los datos aquí para no ensuciar el HTML
  const sections = [
    { title: 'Cliente', links: ['Supermercados', 'Consejos', 'Factura cliente'] },
    { title: 'Trabajador', links: ['Trabaja con nosotros'] },
    { title: 'Proveedor', links: ['Factura-Me', 'Portal Trinidad'] },
    { title: 'Sociedad', links: ['Actualidad', 'Sala de prensa', 'Conoce Mercadona', 'Mercadona en Portugal', 'Cuidemos el Planeta'] }
  ];

  return (
    <footer className={`${styles.customFooter} pt-5 pb-4`}>
      <div className="container">
        
        {/* Sección Superior: Enlaces y Contacto */}
        <div className="row">
          
          {/* Columna Dinámica de Enlaces (Generada automáticamente) */}
          {sections.map((section, index) => (
            <div key={index} className="col-6 col-md-2 mb-4">
              <h6 className="fw-bold text-white mb-3">{section.title}</h6>
              <ul className="list-unstyled">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.footerLink}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Columna de Contacto (Alineada a la derecha) */}
          <div className="col-12 col-md-4 ms-auto text-md-end">
            
            {/* Teléfono */}
            <div className="d-flex align-items-center justify-content-md-end mb-3">
              {/* Si no tienes la imagen exacta, usa este icono de Lucide temporalmente */}
              <div className="me-2 text-white">
                <img src="/public/iconofooter.png" height="32" />
              </div>
              <span className="fs-4 fw-bold text-white">800 500 220</span>
            </div>
            
            {/* Redes Sociales */}
            <div className="d-flex gap-2 justify-content-md-end">
              <a href="#" className={styles.socialBox}><Mail size={16} /></a>
              <a href="#" className={styles.socialBox}><Facebook size={16} /></a>
              <a href="#" className={styles.socialBox} style={{fontWeight: 'bold', fontSize: '14px'}}>𝕏</a>
              <a href="#" className={styles.socialBox}><Youtube size={16} /></a>
              <a href="#" className={styles.socialBox}><Instagram size={16} /></a>
              <a href="#" className={styles.socialBox}><Linkedin size={16} /></a>
            </div>
          </div>

        </div>

        {/* Sección Inferior: Copyright y Legales */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-md-6 text-center text-md-start mb-2">
            <small className="text-white-50">© Mercadona S.A. A46103834. Todos los derechos reservados.</small>
          </div>
          
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className={styles.legalLink}>Accesibilidad</a>
            <a href="#" className={styles.legalLink}>Política de privacidad</a>
            <a href="#" className={styles.legalLink}>Política de cookies</a>
            <a href="#" className={styles.legalLink}>Términos y Condiciones</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;