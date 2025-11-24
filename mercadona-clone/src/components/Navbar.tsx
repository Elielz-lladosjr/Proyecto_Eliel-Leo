import { Navbar as BSNavbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Menu } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <BSNavbar expand="lg" className={styles.navbar}>
      <Container fluid className={styles.container}>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" className={styles.menuBtn}>
          <Menu size={24} />
        </BSNavbar.Toggle>
        
        <BSNavbar.Brand href="#home" className={styles.brand}>
          <img src='/logoMercadona.svg' className={styles.logo} alt="Mercadona Logo" />
        </BSNavbar.Brand>

        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${styles.navLinks}`}>
            <Nav.Link href="#conocenos" className={styles.navLink}>Conócenos</Nav.Link>
            <Nav.Link href="#supermercados" className={styles.navLink}>Supermercados</Nav.Link>
            <Nav.Link href="#trabaja" className={styles.navLink}>Trabaja con nosotros</Nav.Link>
            <Nav.Link href="#atencion" className={styles.navLink}>Atención al cliente</Nav.Link>
          </Nav>
          
          <Nav className={styles.langSelectorWrapper}>
            <NavDropdown title="Español" id="basic-nav-dropdown" align="end" className={styles.langSelector}>
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