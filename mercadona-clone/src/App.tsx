import { useState } from 'react';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';

function App() {
  const [notFoundVisible, setNotFoundVisible] = useState(false);

  return (
    <>
      <Navbar setNotFoundVisible={setNotFoundVisible} /> {/* al hacer clic en cualquier enlace del menu*/}

      <main style={{ minHeight: '80vh', textAlign: 'center' }}>
        {notFoundVisible ? (
          <img
            src="/notfound.png"
            alt="Not Found"
          />
        ) : (
          <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
