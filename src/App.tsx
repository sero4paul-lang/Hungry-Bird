import React from "react";
import { motion } from "motion/react";
import { ShoppingCart, Utensils, Leaf, Heart, MessageCircle, Instagram, Facebook, LucideIcon } from "lucide-react";
import { PRODUCTS, WHATSAPP_NUMBER, Product } from "./constants";

const order = (productName?: string) => {
  const message = productName 
    ? `Hello Hungry Bird! I'd like to order ${productName}.`
    : "Hello Hungry Bird! I'd like to make an order.";
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5 flex flex-col h-full"
    id={`product-${product.id}`}
  >
    <div className="aspect-[4/3] overflow-hidden relative">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand">
        {product.category}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="serif text-2xl font-semibold mb-2">{product.name}</h3>
      <p className="text-stone-500 text-sm mb-6 flex-grow leading-relaxed">
        {product.description}
      </p>
      <button 
        onClick={() => order(product.name)}
        className="w-full bg-brand hover:bg-brand/90 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2 group"
        id={`order-btn-${product.id}`}
      >
        <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
        Order Now
      </button>
    </div>
  </motion.div>
);

interface SectionProps {
  title: string;
  icon: LucideIcon;
  category: string;
}

const Section: React.FC<SectionProps> = ({ title, icon: Icon, category }) => {
  const filteredProducts = PRODUCTS.filter(p => p.category === category);
  
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id={`section-${category.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center gap-3 mb-10 justify-center">
        <div className="p-2 bg-brand/10 rounded-full">
          <Icon className="w-6 h-6 text-brand" />
        </div>
        <h2 className="serif text-4xl font-medium">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand/20">
      {/* Header */}
      <header className="bg-brand text-white py-8 px-4 sticky top-0 z-50 shadow-lg" id="main-header">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="serif text-5xl md:text-6xl font-bold tracking-tight mb-2"
          >
            Hungry Bird
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-sm md:text-base font-medium tracking-wide uppercase"
          >
            Your one stop kitchen help for busy homes
          </motion.p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden" id="hero">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2070" 
            alt="Kitchen background" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="serif text-5xl md:text-7xl text-white font-light mb-6 leading-tight"
          >
            Delicious Moments, <br />
            <span className="italic">Delivered to Your Door.</span>
          </motion.h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => order()}
            className="bg-white text-brand px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-brand-light transition-colors"
            id="hero-cta"
          >
            Explore Our Menu
          </motion.button>
        </div>
      </section>

      {/* Main Content */}
      <main>
        <Section title="Our Signature Menu" icon={Utensils} category="Menu" />
        
        <div className="bg-white/50 py-8">
          <Section title="Healthy Options" icon={Heart} category="Healthy Options" />
        </div>
        
        <Section title="Fresh Veggies" icon={Leaf} category="Fresh Veggies" />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-20 px-4" id="main-footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="serif text-3xl font-bold mb-6">Hungry Bird</h2>
            <p className="text-stone-400 leading-relaxed mb-6">
              Bringing the joy of home-cooked meals and delicious snacks to your doorstep. Quality ingredients, traditional recipes, and modern convenience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs text-stone-500 mb-6">Quick Links</h3>
            <ul className="space-y-4 text-stone-300">
              <li><a href="#section-menu" className="hover:text-brand transition-colors">Signature Menu</a></li>
              <li><a href="#section-healthy-options" className="hover:text-brand transition-colors">Healthy Choices</a></li>
              <li><a href="#section-fresh-veggies" className="hover:text-brand transition-colors">Fresh Veggies</a></li>
              <li><a href="#" onClick={() => order()} className="hover:text-brand transition-colors">Place an Order</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs text-stone-500 mb-6">Contact Us</h3>
            <p className="text-stone-300 mb-6">
              Have questions or special requests? We're just a message away.
            </p>
            <button 
              onClick={() => order()}
              className="flex items-center gap-3 bg-brand px-6 py-3 rounded-xl font-bold hover:bg-brand/90 transition-colors w-full justify-center"
              id="footer-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Hungry Bird. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
