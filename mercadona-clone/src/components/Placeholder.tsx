import { Container, Row, Col, Button } from 'react-bootstrap';
import { Construction, ArrowLeft } from 'lucide-react';

const Placeholder = ({ title = "Próximamente" }: { title?: string }) => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center py-5">
      <Row>
        <Col>
          <div className="mb-4 text-warning">
            <Construction size={80} strokeWidth={1.5} />
          </div>
          <h1 className="display-4 fw-bold mb-3">{title}</h1>
          <p className="lead text-muted mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Estamos trabajando duro para traerte esta funcionalidad. 
            ¡Vuelve pronto para ver las novedades!
          </p>
          <Button 
            href="/" 
            variant="outline-secondary" 
            size="lg" 
            className="fw-bold px-5 rounded-pill d-inline-flex align-items-center gap-2"
          >
            <ArrowLeft size={20} />
            Volver
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Placeholder;
