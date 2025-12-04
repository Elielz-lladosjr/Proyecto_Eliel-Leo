// src/components/Links.tsx
export const handleLinkClick = (name: string, setNotFoundVisible?: (v: boolean) => void) => {
  if (name === 'Inicio') {
    // Si es Inicio, volvemos al contenido normal
    setNotFoundVisible && setNotFoundVisible(false);
  } else {
    // Para cualquier otro enlace, mostrar Not Found
    setNotFoundVisible && setNotFoundVisible(true);
  }
};
