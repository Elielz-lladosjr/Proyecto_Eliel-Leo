import styles from "./section4.module.css";

const Section4 = () => {
  return (
    <main className={styles.section}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <h1 className={`display-4 fw-bold mb-4 ${styles.title}`}>Empieza tu compra en Mercadona</h1>
            
            <div className="d-flex gap-3 mb-4">
              <input 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Código postal"
              />
              <button className="btn btn-success btn-lg fw-bold">ENTRAR</button>
            </div>

            <p className="text-muted mb-4">O descarga la App y haz tu compra en cualquier momento.</p>

            <div className="d-flex gap-3">
              <img src="public/playstore.svg" alt="Google Play" className={styles.storeImg} />
              <img src="public/appstore.svg" alt="App Store" className={styles.storeImg} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section4;