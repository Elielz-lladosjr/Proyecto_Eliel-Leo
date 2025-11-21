import React, { useState } from 'react';
import { 
  Search, 
  User, 
  ShoppingCart, 
  Menu, 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram, 
  Linkedin, 
  Globe,
  Smartphone,
  ArrowRight
} from 'lucide-react';

// --- COMPONENTES SIMULADOS (Para dar contexto al Footer) ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-[#007a3e] text-white py-3 px-4 shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      {/* Logo y Menú Hamburguesa */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-1 hover:bg-green-700 rounded">
          <Menu size={24} />
        </button>
        <div className="font-bold text-2xl tracking-tight">Mercadona</div>
      </div>

      {/* Buscador (Visible en desktop) */}
      <div className="hidden lg:flex flex-1 max-w-xl mx-8">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            className="w-full py-2 pl-4 pr-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
        </div>
      </div>

      {/* Iconos Derecha */}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 hover:text-green-200 transition">
          <User size={22} />
          <span className="hidden md:inline text-sm font-medium">Hola, Identifícate</span>
        </button>
        <button className="relative p-2 hover:bg-green-700 rounded-full transition">
          <ShoppingCart size={24} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#007a3e]">
            0
          </span>
        </button>
      </div>
    </div>
  </nav>
);

const MainContent = () => (
  <main className="bg-gray-100 min-h-[60vh] py-10 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Bienvenido a tu Supermercado Online</h1>
        <p className="text-gray-600 mb-6">Aquí iría el contenido principal de la página, productos, ofertas, etc.</p>
        <button className="bg-[#007a3e] text-white px-6 py-3 rounded hover:bg-green-800 transition font-medium">
          Ver Novedades
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-6 rounded-lg shadow h-64 flex items-center justify-center border border-gray-200">
            <span className="text-gray-400 font-medium">Producto Destacado {item}</span>
          </div>
        ))}
      </div>
    </div>
  </main>
);

// --- COMPONENTE FOOTER (EL OBJETIVO PRINCIPAL) ---

const Footer = () => {
  // Datos para las columnas de enlaces (Simulando la estructura real)
  const linkSections = [
    {
      title: "Lo más buscado",
      links: ["Localizar Supermercados", "Trabaja con nosotros", "Sala de Prensa", "Actualidad Mercadona"]
    },
    {
      title: "Enlaces de interés",
      links: ["Consejos", "Atención al Cliente", "Portal de Proveedores", "Factura Electrónica"]
    },
    {
      title: "Legal",
      links: ["Accesibilidad", "Condiciones de uso", "Política de privacidad", "Política de cookies"]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 font-sans">
      {/* Parte Superior: Apps y Redes Sociales */}
      <div className="bg-[#f8f8f8] py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Izquierda: Call to action App */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-[#007a3e] font-bold text-lg">
              <Smartphone size={28} />
              <span>Descarga nuestra App</span>
            </div>
            <div className="flex gap-2">
              {/* Botones simulados de Stores */}
              <button className="bg-black text-white px-3 py-1.5 rounded flex items-center gap-2 hover:opacity-80 transition">
                <span className="text-xs text-left leading-tight">
                  <span className="block text-[10px] font-light">Consíguelo en el</span>
                  <span className="font-bold">App Store</span>
                </span>
              </button>
              <button className="bg-black text-white px-3 py-1.5 rounded flex items-center gap-2 hover:opacity-80 transition">
                <span className="text-xs text-left leading-tight">
                  <span className="block text-[10px] font-light">DISPONIBLE EN</span>
                  <span className="font-bold">Google Play</span>
                </span>
              </button>
            </div>
          </div>

          {/* Derecha: Redes Sociales */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Síguenos en:</span>
            <div className="flex gap-3 text-gray-400">
              <a href="#" className="hover:text-[#1877F2] transition"><Facebook size={24} /></a>
              <a href="#" className="hover:text-[#1DA1F2] transition"><Twitter size={24} /></a>
              <a href="#" className="hover:text-[#FF0000] transition"><Youtube size={24} /></a>
              <a href="#" className="hover:text-[#E1306C] transition"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#0A66C2] transition"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Parte Central: Grid de Enlaces */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Columnas dinámicas */}
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm text-gray-500 hover:text-[#007a3e] hover:underline transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Columna de contacto/info adicional */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide border-b border-gray-200 pb-2 inline-block">
              Atención al Cliente
            </h3>
            <div className="text-sm text-gray-500 space-y-3">
              <p>¿Tienes dudas? Llámanos</p>
              <p className="text-2xl font-bold text-[#007a3e]">800 500 220</p>
              <p className="text-xs">Horario: 7:00 - 22:30</p>
              <button className="mt-2 flex items-center gap-2 text-[#007a3e] font-medium hover:underline">
                Ir a preguntas frecuentes <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Parte Inferior: Copyright y Legales */}
      <div className="bg-[#007a3e] text-white py-4 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Mercadona S.A. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex items-center gap-6">
             <span className="hidden md:inline text-green-200">|</span>
             <div className="flex gap-4">
                <a href="#" className="hover:text-green-200 transition">Política de Privacidad</a>
                <a href="#" className="hover:text-green-200 transition">Términos de Uso</a>
             </div>
             <span className="hidden md:inline text-green-200">|</span>
             <div className="flex items-center gap-2 border border-green-500 rounded px-2 py-1 bg-green-800/30">
               <Globe size={14} />
               <span className="font-medium">España</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- APP PRINCIPAL ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <div className="flex-grow">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}