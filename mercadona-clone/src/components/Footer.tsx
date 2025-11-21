import { 
  Facebook, Twitter, Youtube, Instagram, Linkedin, Globe, Smartphone, ArrowRight
} from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const linkSections = [
    {
      title: "Lo más buscado",
      links: ["Localizar Supermercados", "Trabaja con nosotros", "Sala de Prensa", "Actualidad Mercadona"]
    },
    {
      title: "Enlaces de interés",
      links: ["Consejos", "Atención al Cliente", "Portal de Proveedores", "Factura Electrónica"]
    },
    {
      title: "Legal",
      links: ["Accesibilidad", "Condiciones de uso", "Política de privacidad", "Política de cookies"]
    }
  ];

  return (
    <footer className={styles.footer}>
      {/* Parte Superior */}
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.topFlex}>
            
            <div className={styles.appSection}>
              <div className={styles.appTitle}>
                <Smartphone size={28} />
                <span>Descarga nuestra App</span>
              </div>
              <div className={styles.storeButtons}>
                <button className={styles.storeBtn}>
                  <div>
                    <span style={{display:'block', fontSize:'10px', fontWeight:300}}>Consíguelo en el</span>
                    <span style={{fontWeight:'bold'}}>App Store</span>
                  </div>
                </button>
                <button className={styles.storeBtn}>
                  <div>
                    <span style={{display:'block', fontSize:'10px', fontWeight:300}}>DISPONIBLE EN</span>
                    <span style={{fontWeight:'bold'}}>Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            <div className={styles.socialSection}>
              <span style={{fontSize:'14px', fontWeight:500, textTransform:'uppercase'}}>Síguenos en:</span>
              <div className={styles.socialIcons}>
                <Facebook size={24} />
                <Twitter size={24} />
                <Youtube size={24} />
                <Instagram size={24} />
                <Linkedin size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parte Central */}
      <div className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {linkSections.map((section, index) => (
              <div key={index}>
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

            <div>
              <h3 className={styles.columnTitle}>Atención al Cliente</h3>
              <div style={{fontSize:'14px', color:'#6b7280'}}>
                <p>¿Tienes dudas? Llámanos</p>
                <p className={styles.phone}>800 500 220</p>
                <p style={{fontSize:'12px'}}>Horario: 7:00 - 22:30</p>
                <button className={styles.faqBtn}>
                  Ir a preguntas frecuentes <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parte Inferior */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomFlex}>
            <p>&copy; {new Date().getFullYear()} Mercadona S.A. Todos los derechos reservados.</p>
            
            <div className={styles.bottomLinks}>
               <a href="#" style={{color:'white', textDecoration:'none'}}>Política de Privacidad</a>
               <a href="#" style={{color:'white', textDecoration:'none'}}>Términos de Uso</a>
               <div className={styles.country}>
                 <Globe size={14} />
                 <span style={{fontWeight:500}}>España</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;