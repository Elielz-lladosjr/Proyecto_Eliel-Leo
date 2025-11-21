import { Menu } from 'lucide-react';
import styles from './Navbar.module.css'; // Importamos el CSS Module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo y Menú */}
        <div className={styles.logoSection}>
          <button className={styles.menuBtn}>
            <Menu size={24} />
          </button>
          <img src='/logoMercadona.svg' className={styles.logo}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;