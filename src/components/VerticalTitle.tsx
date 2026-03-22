import React from 'react';
import { motion } from 'framer-motion';

export default function VerticalTitle() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="absolute left-4 md:left-12 top-16 md:top-24 flex flex-col items-center z-20 pointer-events-none"
    >
      <div className="flex flex-col items-center space-y-2 mb-4 md:mb-8 relative">
        <span className="text-white text-4xl md:text-6xl font-serif" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.1em' }}>
          数字大明宫
        </span>
        <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-red-600 flex items-center justify-center absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2">
          <span className="text-red-600 font-serif text-sm md:text-lg absolute -top-1.5 -right-1.5 bg-black px-1 leading-none">唐</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4 h-48 md:h-64">
        <div className="w-px h-full bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-white"></div>
        </div>
        <span className="text-white/80 text-[10px] md:text-xs tracking-[0.4em] font-sans" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          DIGITAL DAMING PALACE
        </span>
      </div>
    </motion.div>
  );
}
