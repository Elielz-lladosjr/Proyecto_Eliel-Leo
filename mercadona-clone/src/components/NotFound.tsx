import { Container, Row, Col, Button } from 'react-bootstrap';
import { Home, SearchX } from 'lucide-react';

const NotFound = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center py-5">
      <Row>
        <Col>
          <div className="mb-4 text-muted">
            <SearchX size={80} strokeWidth={1.5} />
          </div>
          <h1 className="display-1 fw-bold text-success mb-2">404</h1>
          <h2 className="display-6 fw-bold mb-4">Página no encontrada</h2>
          <p className="lead text-muted mb-5" style={{ maxWidth: '500px', margin: '0 auto' }}>
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
            Comprueba la URL o vuelve a la página principal.
          </p>
          <Button 
            href="/" 
            variant="success" 
            size="lg" 
            className="fw-bold px-5 shadow-sm rounded-pill d-inline-flex align-items-center gap-2"
            style={{ backgroundColor: '#00AB61', borderColor: '#00AB61' }}
          >
            <Home size={20} />
            Volver al inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
