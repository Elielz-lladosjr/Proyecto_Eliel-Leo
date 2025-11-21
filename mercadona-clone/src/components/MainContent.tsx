import styles from './MainContent.module.css'; 
const MainContent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.heroCard}>
          <h1 className={styles.title}>Bienvenido a tu Supermercado Online</h1>
          <p className={styles.subtitle}>Aquí iría el contenido principal de la página, productos, ofertas, etc.</p>
          <button className={styles.ctaButton}>
            Ver Novedades
          </button>
        </div>
        
        <div className={styles.grid}>
          {[1, 2, 3].map((item) => (
            <div key={item} className={styles.productCard}>
              <span style={{ color: '#f3f4f6', fontWeight: 500 }}>Producto Destacado {item}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;