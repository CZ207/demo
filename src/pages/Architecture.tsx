import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Architecture() {
  const buildings = [
    {
      id: 'danfeng',
      name: '丹凤门',
      english: 'Danfeng Gate',
      description: '大明宫的正南门，是唐代皇帝举行登基、改元、宣布大赦等大典的重要场所。丹凤门共有五个门道，是中国古代都城城门建制的最高等级，被誉为"盛唐第一门"。',
      image: 'https://storage.googleapis.com/aistudio-user-uploads-us-central1/000000000000/2026-03-22T13:40:28.188402431Z/1/image.png'
    },
    {
      id: 'danfeng-plaza',
      name: '丹凤门广场',
      english: 'Danfeng Gate Plaza',
      description: '丹凤门外的广阔广场，是举行盛大国事活动和外事迎宾的场地。宽阔的御道和宏伟的城墙，彰显着大唐帝国的威仪与气度。',
      image: 'https://storage.googleapis.com/aistudio-user-uploads-us-central1/000000000000/2026-03-22T13:40:28.188402431Z/2/image.png'
    },
    {
      id: 'hanyuan',
      name: '含元殿',
      english: 'Hanyuan Hall',
      description: '大明宫的正殿，是唐长安城的标志性建筑。建于龙首原上，气势恢宏。每逢元旦、冬至，皇帝在此举行大朝贺，接受万国朝拜，是唐代国家权力的象征。',
      image: 'https://storage.googleapis.com/aistudio-user-uploads-us-central1/000000000000/2026-03-22T13:40:28.188402431Z/3/image.png'
    },
    {
      id: 'que-tower',
      name: '阙楼',
      english: 'Que Tower',
      description: '大明宫的重要防御与礼仪性建筑。翔鸾阁与栖凤阁分列含元殿两侧，通过飞廊与主殿相连，形成"如鸟斯革，如翚斯飞"的壮丽景观。',
      image: 'https://storage.googleapis.com/aistudio-user-uploads-us-central1/000000000000/2026-03-22T13:40:28.188402431Z/5/image.png'
    },
    {
      id: 'complex',
      name: '宫殿群落',
      english: 'Palace Complex',
      description: '大明宫占地3.2平方公里，是北京故宫的4.5倍。其建筑布局严谨，分为前朝和后寝两部分，亭台楼阁星罗棋布，展现了唐代建筑艺术的最高成就。',
      image: 'https://storage.googleapis.com/aistudio-user-uploads-us-central1/000000000000/2026-03-22T13:40:28.188402431Z/4/image.png'
    }
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-3 md:mb-4 tracking-widest">宫殿巡礼</h1>
          <p className="text-white/50 text-xs md:text-sm tracking-[0.3em] uppercase">Palace Architecture Tour</p>
          <div className="w-16 md:w-24 h-px bg-red-600 mx-auto mt-6 md:mt-8"></div>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {buildings.map((building, index) => (
            <motion.div 
              key={building.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
            >
              <div className="w-full md:w-3/5 h-[250px] sm:h-[350px] md:h-[600px] overflow-hidden relative group">
                <img 
                  src={building.image} 
                  alt={building.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="text-red-600 font-serif text-lg md:text-xl mb-2">0{index + 1}</span>
                <h2 className="text-3xl md:text-5xl font-serif mb-2 tracking-widest">{building.name}</h2>
                <h3 className="text-white/40 text-xs md:text-sm tracking-[0.2em] uppercase mb-6 md:mb-8">{building.english}</h3>
                <p className="text-white/70 leading-relaxed md:leading-loose text-sm md:text-base text-justify font-light">
                  {building.description}
                </p>
                <div className="mt-8 md:mt-10">
                  <button className="border border-white/30 hover:border-white px-6 md:px-8 py-2 md:py-3 text-xs md:text-sm tracking-widest transition-colors">
                    探索详情
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
