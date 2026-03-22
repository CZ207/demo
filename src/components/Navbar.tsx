import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: '首页', path: '/' },
    { name: '宫殿巡礼', path: '/architecture' },
    { name: '历史长卷', path: '/history' },
    { name: '数字展厅', path: '/exhibition' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-gradient-to-b from-black/80 to-transparent"
    >
      <div className="flex items-center space-x-12">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#c8161d] flex items-center justify-center mr-3 md:mr-4 relative">
            <span className="text-[#c8161d] font-serif text-sm md:text-lg">唐</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-lg md:text-2xl font-serif tracking-widest">数字大明宫</span>
            <span className="text-white/60 text-[8px] md:text-[10px] tracking-[0.2em] font-sans">DIGITAL DAMING PALACE</span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <div 
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`cursor-pointer text-sm tracking-widest transition-colors relative group ${
                location.pathname === item.path ? 'text-white font-medium' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-red-600"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-6">
        <Globe className="hidden md:block w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
        <button className="hidden md:block border border-white/30 hover:border-white text-white px-6 py-1.5 rounded-full text-sm tracking-widest transition-colors">
          预约参观
        </button>
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center pointer-events-auto md:hidden"
          >
            <button 
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-serif tracking-widest cursor-pointer transition-colors ${
                    location.pathname === item.path ? 'text-[#c8161d]' : 'text-white'
                  }`}
                >
                  {item.name}
                </div>
              ))}
              <div className="w-12 h-px bg-white/20 my-4"></div>
              <button 
                className="border border-[#c8161d] text-[#c8161d] px-8 py-2 rounded-full text-sm tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                预约参观
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
