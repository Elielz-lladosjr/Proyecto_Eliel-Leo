import styles from "./Section3.module.css";

const Section3 = () => {
  return (
    <section className={styles.newsContainer}>
      <div className="container">
        <div className="row align-items-center justify-content-center gy-4 column-gap-4">
          
          <div className="col-12 col-md-5 order-md-2 text-center text-md-start">
            <div className={styles.contentWrapper}>
                <h2 className={styles.newsTitle}>Nueva tienda online en algunas zonas</h2>
                <p className={styles.newsText}>
                Por el momento, la nueva app y web está disponible en Valencia, Barcelona, Madrid y otras poblaciones. 
                Introduce tu código postal arriba para ver si repartimos en tu zona. Si aún no llegamos, ¡apúntate y te avisamos!
                </p>
                <a href="#" className={styles.newsLink}>Avísame</a>
            </div>
          </div>

          <div className="col-12 col-md-5 order-md-1">
             <div className={styles.newsImage}>
              <img
                src="/cuadro2.jpeg"
                alt="Nueva tienda online"
                className="img-fluid"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section3;