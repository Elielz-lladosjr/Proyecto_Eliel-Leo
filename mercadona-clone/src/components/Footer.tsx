import { Facebook, Youtube, Instagram, Linkedin, Mail, Headset } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const linkSections = [
    {
      title: "Cliente",
      links: ["Supermercados", "Consejos", "Factura cliente"]
    },
    {
      title: "Trabajador",
      links: ["Trabaja con nosotros"]
    },
    {
      title: "Proveedor",
      links: ["Factura-Me", "Portal Trinidad"]
    },
    {
      title: "Sociedad",
      links: ["Actualidad", "Sala de prensa", "Conoce Mercadona", "Mercadona en Portugal", "Cuidemos el Planeta"]
    }
  ];

  return (
    <footer className={styles.footer}>
      
      {/* SECCIÓN SUPERIOR: La imagen ocupa todo el fondo */}
      <section className={styles.topSection}>
        
        {/* IMAGEN DE FONDO (footer1.png) */}
        <div className={styles.backgroundImageContainer}>
            <img 
              className={styles.heroImage} 
              src="/imagenes/footer2.jpg" 
              alt="Fondo Mercadona" 
            />
        </div>

        {/* CONTENIDO (Texto y Formulario) ENCIMA DE LA IMAGEN */}
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>
              Empieza tu compra en Mercadona
            </h2>
            
            <form className={styles.postalForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.postalRow}>
                <input 
                  className={styles.postalInput} 
                  type="text" 
                  placeholder="Código postal" 
                  aria-label="Código postal" 
                />
                <button className={styles.postalBtn} type="submit">
                  ENTRAR
                </button>
              </div>
            </form>

            <p className={styles.downloadMessage}>
              O descarga la App y haz tu compra en cualquier momento.
            </p>

            <div className={styles.storeBadges}>
               <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/imagenes/play.svg" alt="Disponible en Google Play" className={styles.storeSvg} />
               </a>
               <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/imagenes/app.svg" alt="Consíguelo en el App Store" className={styles.storeSvg} />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN INFERIOR (Oscura) */}
      <section className={styles.mainSectionDark}>
        <div className={styles.container}>
          <div className={styles.mainFlexLayout}>
            
            <div className={styles.leftLinksStack}>
              {linkSections.map((section, index) => (
                <div key={index} className={styles.linkBlock}>
                  <h3 className={styles.columnTitle}>{section.title}</h3>
                  <ul className={styles.linkList}>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#" className={styles.link}>{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className={styles.rightContactColumn}>
              {/* AQUÍ ESTÁ EL CAMBIO: YA NO ES UN <A>, ES UN DIV/SPAN */}
              <div className={styles.phoneBlock}>
                <img src="/imagenes/footer1.png" alt="Contacto Mercadona" className={styles.phoneImage} />
                <span className={styles.phoneNumber}>800 500 220</span>
              </div>

              <div className={styles.socialIcons}>
                <a href="#" aria-label="Email"><Mail size={18} /></a>
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="X" style={{fontWeight: 'bold', fontSize: '16px', fontFamily: 'sans-serif'}}>𝕏</a>
                <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomFlex}>
            <p className={styles.copyright}>
              © Mercadona S.A. A46103834. Todos los derechos reservados.
            </p>
            
            <div className={styles.legalLinks}>
               <a href="#">Accesibilidad</a>
               <a href="#">Política de privacidad</a>
               <a href="#">Política de cookies</a>
               <a href="#">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer; 