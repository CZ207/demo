import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Exhibition() {
  const exhibits = [
    {
      id: 1,
      title: '莲花纹瓦当',
      type: '建筑构件',
      image: 'https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: '三彩骆驼载乐俑',
      type: '唐三彩',
      image: 'https://images.unsplash.com/photo-1582560475093-ba66cef36eb2?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: '鎏金铜铺首',
      type: '金属器',
      image: 'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      title: '白瓷辟雍砚',
      type: '瓷器',
      image: 'https://images.unsplash.com/photo-1620211516246-860471b01c3c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      title: '石刻柱础',
      type: '石雕',
      image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      title: '金银平脱漆盒',
      type: '漆器',
      image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-3 md:mb-4 tracking-widest">数字展厅</h1>
          <p className="text-white/50 text-xs md:text-sm tracking-[0.3em] uppercase">Digital Exhibition</p>
          <div className="w-16 md:w-24 h-px bg-red-600 mx-auto mt-6 md:mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {exhibits.map((exhibit, index) => (
            <motion.div
              key={exhibit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-black/50 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={exhibit.image} 
                  alt={exhibit.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-red-500 text-xs tracking-[0.2em] mb-2 uppercase">{exhibit.type}</span>
                <h3 className="text-2xl font-serif tracking-widest">{exhibit.title}</h3>
                <div className="w-8 h-px bg-white/50 mt-4"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
