import { useParams, Link } from 'react-router-dom';

const InfoPage = () => {
  // 1. 'nombre' debe coincidir con lo que pongamos en App.tsx (path="/info/:nombre")
  const { nombre } = useParams();

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      
      <div className="p-5 border rounded shadow-sm bg-light">
        <h1 className="display-4 text-success mb-4">¡Hola!</h1>
        
        <p className="lead fs-3">
          Has entrado a la sección de: <br />
          {/* Aquí mostramos el nombre dinámico que viene de la URL */}
          <strong className="text-decoration-underline text-uppercase mt-2 d-block">
            {nombre}
          </strong>
        </p>

        <hr className="my-4" />

        <p className="text-muted">
          Esta es una página generada dinámicamente.
        </p>

        {/* Botón para volver al inicio */}
        <Link to="/" className="btn btn-success btn-lg mt-3">
          Volver al Inicio
        </Link>
      </div>

    </div>
  );
};

export default InfoPage;