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

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-[#007a3e] text-white py-3 px-4 shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      {/* Logo y Menú Hamburguesa */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-1 hover:bg-green-700 rounded">
          <Menu size={24} />
        </button>
        <div className="font-bold text-2xl tracking-tight">Mercadona</div>
      </div>

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
}