import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import VerticalTitle from '../components/VerticalTitle';

export default function Home() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 'home',
      title: '数字大明宫',
      subtitle: 'Digital Daming Palace',
      path: '/architecture',
      btnText: '探索宫殿',
      bgImage: 'https://storage.googleapis.com/aistudio-user-uploads-us-central1/000000000000/2026-03-22T13:40:28.188402431Z/0/image.png'
    },
    {
      id: 'architecture',
      title: '宫殿巡礼',
      subtitle: 'Palace Tour',
      path: '/architecture',
      btnText: '立即进入',
      bgImage: 'https://storage.googleapis.com/aistudio-user-uploads-us-central1/000000000000/2026-03-22T13:40:28.188402431Z/3/image.png'
    },
    {
      id: 'history',
      title: '历史长卷',
      subtitle: 'Historical Scroll',
      path: '/history',
      btnText: '立即进入',
      bgImage: 'https://storage.googleapis.com/aistudio-user-uploads-us-central1/000000000000/2026-03-22T13:40:28.188402431Z/5/image.png'
    },
    {
      id: 'exhibition',
      title: '数字展厅',
      subtitle: 'Digital Exhibition',
      path: '/exhibition',
      btnText: '立即进入',
      bgImage: 'https://images.unsplash.com/photo-1582560475093-ba66cef36eb2?auto=format&fit=crop&q=80&w=2000'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle swipe gestures
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div 
      className="relative w-full h-screen bg-black overflow-hidden font-sans"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeIndex}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slides[activeIndex].bgImage} 
            alt={slides[activeIndex].title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Header (Mobile & Desktop) */}
      <div className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-8 py-4 md:py-6 pointer-events-auto">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#c8161d] flex items-center justify-center mr-3 relative">
            <span className="text-[#c8161d] font-serif text-sm md:text-lg">唐</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-lg md:text-2xl font-serif tracking-widest">数字大明宫</span>
            <span className="text-white/60 text-[8px] md:text-[10px] tracking-[0.2em] font-sans">DIGITAL DAMING PALACE</span>
          </div>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          <button 
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Desktop Header Actions (Optional, to match Navbar if needed) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="border border-white/30 hover:border-white text-white px-6 py-1.5 rounded-full text-sm tracking-widest transition-colors">
            预约参观
          </button>
        </div>
      </div>

      {/* Vertical Title (Left) */}
      <VerticalTitle />

      {/* Right Side Menu */}
      <div className="absolute right-0 top-24 md:top-32 z-30 flex flex-col w-56 md:w-72 bg-white/10 backdrop-blur-md">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer py-3 md:py-4 px-6 md:px-8 transition-all duration-300 flex flex-col items-end text-right relative ${
              activeIndex === index 
                ? 'bg-[#c8161d] text-white shadow-lg' 
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <span className="text-base md:text-xl font-serif tracking-widest mb-1">{slide.title}</span>
            <span className="text-[10px] md:text-xs tracking-widest uppercase font-sans opacity-70">{slide.subtitle}</span>
            {slide.id === 'exhibition' && (
              <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-[#c8161d] rounded-full flex items-center justify-center text-[10px] text-white shadow-md">
                新
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Center/Bottom Content */}
      <div className="absolute bottom-24 md:bottom-32 left-0 right-0 flex flex-col items-center justify-center z-20 pointer-events-none px-4">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col items-center"
          >
            <h2 className="text-white text-3xl md:text-5xl font-serif tracking-widest mb-2 drop-shadow-lg">
              {slides[activeIndex].title}
            </h2>
            <p className="text-white/80 text-sm md:text-xl font-sans font-light tracking-[0.2em] mb-8 drop-shadow-md uppercase">
              {slides[activeIndex].subtitle}
            </p>
            
            <div className="pointer-events-auto">
              <button 
                onClick={() => navigate(slides[activeIndex].path)}
                className="bg-[#c8161d] hover:bg-[#a01217] text-white px-8 md:px-12 py-2.5 md:py-3 rounded-full text-sm md:text-lg tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(200,22,29,0.4)]"
              >
                {slides[activeIndex].btnText}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-8 flex items-center space-x-2 text-white/40 text-xs tracking-widest">
          <span>向左向右滑动切换</span>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-8 z-20 pointer-events-auto hidden md:block">
        <button onClick={prevSlide} className="p-2 text-white/50 hover:text-white transition-colors">
          <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-8 z-20 pointer-events-auto hidden md:block">
        <button onClick={nextSlide} className="p-2 text-white/50 hover:text-white transition-colors">
          <ChevronRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />
        </button>
      </div>

      {/* Footer Copyright */}
      <div className="absolute bottom-0 w-full text-center py-4 z-30 pointer-events-none bg-black/80 backdrop-blur-sm">
         <p className="text-white/40 text-[9px] md:text-[11px] tracking-wider px-4">
           大明宫国家遗址公园版权所有 2010-2026 Copyright For Daming Palace National Heritage Park.<br className="md:hidden" /> 陕ICP备12345678号
         </p>
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
              {slides.map((slide) => (
                <div 
                  key={slide.id}
                  onClick={() => {
                    if (slide.id === 'home') {
                      setIsMobileMenuOpen(false);
                    } else {
                      navigate(slide.path);
                    }
                  }}
                  className={`text-2xl font-serif tracking-widest cursor-pointer transition-colors ${
                    slide.id === 'home' ? 'text-[#c8161d]' : 'text-white'
                  }`}
                >
                  {slide.title === '数字大明宫' ? '首页' : slide.title}
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
    </div>
  );
}
