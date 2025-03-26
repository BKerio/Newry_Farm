import { Leaf, Cloud, Sun, Droplets, Wind, PersonStandingIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const CreativeHeroSection = () => {
  const stats = [
    {
      icon: <Leaf className="h-6 w-6" />,
      label: 'Acres Optimized',
      value: 10000, 
      description: 'Smart farming across thousands of acres',
    },
    {
      icon: <Sun className="h-6 w-6" />,
      label: 'Yield Increase',
      value: 32,
      description: 'Better yields through AI optimization',
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      label: 'Water Saved',
      value: 40,
      description: 'Sustainable water management',
    },
    {
      icon: <PersonStandingIcon className="h-6 w-6" />,
      label: 'Happy Farmers',
      value: 2000,
      description: 'Growing community of smart farmers',
    },
  ] as const;

  return (
    <div className="relative w-full bg-hero bg-cover backdrop-blur-[2px] py-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-black/30 to-black/70" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => {
          const icons = [Leaf, Sun, Wind, Droplets, Cloud, Leaf];
          const IconComponent = icons[i];
          return (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute"
              style={{
                left: `${(i * 20) % 90}%`,
                top: `${(i * 15) % 80}%`,
              }}
            >
              <IconComponent className="h-8 w-8 text-white/20" />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center">
          {/* Logo Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-green-400 to-emerald-600"
          >
            <Leaf className="h-8 w-8 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mb-6 text-center font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block text-4xl bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
              Smart Farming
            </span>
            <span className="mt-2 block text-3xl text-white sm:text-4xl lg:text-5xl">
              Future of Agriculture
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transform your agricultural practices with AI-powered insights,
            precision farming techniques, and sustainable solutions.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-black/50 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div transition={{ duration: 0.2 }}>
                  <div className="mb-2 text-green-400">{stat.icon}</div>
                  <div className="font-bold text-2xl text-white">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      separator=","
                      suffix={stat.label === 'Yield Increase' || stat.label === 'Water Saved' ? '%' : ''}
                    />
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CreativeHeroSection;
