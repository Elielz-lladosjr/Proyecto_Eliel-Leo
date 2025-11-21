import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;