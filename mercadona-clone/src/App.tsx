import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Placeholder from './components/Placeholder';

function App() {
  const [notFoundVisible, setNotFoundVisible] = useState(false);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/conocenos" element={<Placeholder title="Conócenos" />} />
          <Route path="/supermercados" element={<Placeholder title="Supermercados" />} />
          <Route path="/trabaja-con-nosotros" element={<Placeholder title="Trabaja con nosotros" />} />
          <Route path="/atencion-al-cliente" element={<Placeholder title="Atención al cliente" />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={
            <>
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
            </>
          } />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
