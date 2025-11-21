import { Search, User, ShoppingCart, Menu } from 'lucide-react';
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
          <div className={styles.logo}>Mercadona</div>
        </div>

        {/* Buscador */}
        <div className={styles.searchSection}>
          <div className={styles.searchWrapper}>
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              className={styles.searchInput}
            />
            <Search className={styles.searchIcon} size={20} />
          </div>
        </div>

        {/* Iconos Derecha */}
        <div className={styles.actions}>
          <button className={styles.actionBtn}>
            <User size={22} />
            <span className={styles.userText}>Hola, Identifícate</span>
          </button>
          <button className={styles.cartBtn}>
            <ShoppingCart size={24} />
            <span className={styles.badge}>0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;