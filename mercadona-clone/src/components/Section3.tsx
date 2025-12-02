import styles from "./Section3.module.css";

const Section3 = () => {
  return (
    <section className={styles.newsContainer}>
      <div className="container">
        {/* Row centra el contenido verticalmente con align-items-center */}
        <div className="row align-items-center gy-4 justify-content-center">
          
          <div className="col-12 col-md-5 text-center text-md-end">
            <div className={styles.newsImage}>
              <img
                src="/public/cuadro2.jpeg"
                alt="Nueva tienda online"
                
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <h2 className={styles.newsTitle}>Nueva tienda online en algunas zonas</h2>
            <p className={styles.newsText}>
              Por el momento, la nueva app y web está disponible en Valencia, Barcelona, Madrid y otras poblaciones. 
              Introduce tu código postal arriba para ver si repartimos en tu zona. Si aún no llegamos, ¡apúntate y te avisamos!
            </p>
            <a href="#" className={styles.newsLink}>Avísame</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section3;