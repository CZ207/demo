import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function History() {
  const timeline = [
    {
      year: '贞观八年 (634年)',
      title: '始建大明宫',
      desc: '唐太宗李世民为太上皇李渊避暑，开始在长安城东北部的龙首原上修建大明宫，初名永安宫。'
    },
    {
      year: '龙朔二年 (662年)',
      title: '高宗扩建',
      desc: '唐高宗李治因患风痹，嫌太极宫卑湿，下令大规模扩建大明宫，并正式更名为大明宫，次年迁入理政。'
    },
    {
      year: '开元天宝 (713-756年)',
      title: '盛唐辉煌',
      desc: '唐玄宗时期，大明宫达到了其建筑和政治地位的顶峰，成为当时世界上最宏伟壮丽的宫殿群，万国来朝。'
    },
    {
      year: '天祐元年 (904年)',
      title: '毁于战火',
      desc: '唐末战乱，朱温挟持唐昭宗迁都洛阳，大明宫被焚毁，这座见证了大唐两百余年兴衰的宏伟宫殿化为废墟。'
    },
    {
      year: '2010年',
      title: '遗址公园',
      desc: '大明宫国家遗址公园正式建成开放，通过现代科技与遗址保护相结合，向世人展示盛唐气象。'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-8 max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-3 md:mb-4 tracking-widest">历史长卷</h1>
          <p className="text-white/50 text-xs md:text-sm tracking-[0.3em] uppercase">Historical Timeline</p>
          <div className="w-16 md:w-24 h-px bg-red-600 mx-auto mt-6 md:mt-8"></div>
        </motion.div>

        <div className="relative border-l border-white/20 ml-4 md:ml-[50%] md:-translate-x-px">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`mb-12 md:mb-16 relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="absolute left-[-5px] md:left-0 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-4 border-[#0a0a0a] box-content z-10 mt-1.5 md:mt-0"></div>
              
              <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                <span className="text-red-500 font-serif text-base md:text-lg mb-1 md:mb-2 block">{item.year}</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4 tracking-wider">{item.title}</h3>
                <p className="text-white/60 leading-relaxed font-light text-sm md:text-base text-justify md:text-left">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
