import { Navbar as BSNavbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Menu } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <BSNavbar expand="lg" className={`bg-white shadow-sm sticky-top py-3 ${styles.navbar}`}>
      <Container className="px-3 px-sm-0 px-lg-5">
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" className={`border-0 p-0 shadow-none ${styles.menuBtn}`}>
          <Menu size={24} />
        </BSNavbar.Toggle>

        <BSNavbar.Brand href="#home" className={`${styles.brand} me-lg-5`}>
          <img src='/logoMercadona.svg' alt="Mercadona Logo" height="40" />
        </BSNavbar.Brand>

        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-4 align-items-start align-items-lg-center">
            <Nav.Link href="#conocenos" className={styles.navLink}>Conócenos</Nav.Link>
            <Nav.Link href="#supermercados" className={styles.navLink}>Supermercados</Nav.Link>
            <Nav.Link href="#trabaja" className={styles.navLink}>Trabaja con nosotros</Nav.Link>
            <Nav.Link href="#atencion" className={styles.navLink}>Atención al cliente</Nav.Link>
          </Nav>
          
          <Nav className="ms-auto align-items-start align-items-lg-center">
            <NavDropdown 
              title="Español" 
              id="basic-nav-dropdown" 
              align="end" 
              className={styles.langSelector}
            >
              <NavDropdown.Item href="#es">Español</NavDropdown.Item>
              <NavDropdown.Item href="#en">English</NavDropdown.Item>
              <NavDropdown.Item href="#pt">Português</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;