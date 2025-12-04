import { Navbar as BSNavbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Menu } from 'lucide-react';
import styles from './Navbar.module.css';
import { handleLinkClick } from './Links';

interface NavbarProps {
  setNotFoundVisible?: (visible: boolean) => void;
}

const Navbar = ({ setNotFoundVisible }: NavbarProps) => {
  return (
    <BSNavbar expand="lg" className={styles.navbar}>
      <Container fluid className={styles.container}>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" className={styles.menuBtn}>
          <Menu size={24} />
        </BSNavbar.Toggle>

        <BSNavbar.Brand onClick={() => handleLinkClick('Inicio', setNotFoundVisible)} className={styles.brand}>
          <img src='/logoMercadona.svg' className={styles.logo} alt="Mercadona Logo" />
        </BSNavbar.Brand>

        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${styles.navLinks}`}>
            <Nav.Link onClick={() => handleLinkClick('Conócenos', setNotFoundVisible)} className={styles.navLink}>Conócenos</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('Supermercados', setNotFoundVisible)} className={styles.navLink}>Supermercados</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('Trabaja con nosotros', setNotFoundVisible)} className={styles.navLink}>Trabaja con nosotros</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('Atención al cliente', setNotFoundVisible)} className={styles.navLink}>Atención al cliente</Nav.Link>
          </Nav>

          <Nav className={styles.langSelectorWrapper}>
            <NavDropdown title="Español" id="basic-nav-dropdown" align="end" className={styles.langSelector}>
              <NavDropdown.Item onClick={() => handleLinkClick('Español', setNotFoundVisible)}>Español</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLinkClick('English', setNotFoundVisible)}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLinkClick('Português', setNotFoundVisible)}>Português</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
