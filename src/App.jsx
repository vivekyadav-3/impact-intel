import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Trophy, TrendingUp, Calendar, Zap, Layout, Star, Search, Code2, Database, Globe, Cpu, Smartphone } from 'lucide-react';
import Countdown from './components/Countdown';
import ProjectCard from './components/ProjectCard';
import { interestedProjects, myProjects } from './data/projects';
import './index.css';

const App = () => {
  const gssocStartDate = "2026-05-15T00:00:00";

  const stats = [
    { label: 'Global Rank', value: '#--', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Total Points', value: '0', icon: Zap, color: 'text-blue-400' },
    { label: 'Merged PRs', value: '0', icon: GitBranch, color: 'text-purple-400' },
    { label: 'Level', value: '1', icon: TrendingUp, color: 'text-green-400' },
  ];

  const skillGroups = [
    {
      title: 'Frontend Mastery',
      icon: Globe,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      color: 'bg-blue-500/20 text-blue-400'
    },
    {
      title: 'Backend Engineering',
      icon: Cpu,
      skills: ['Node.js', 'Express', 'Java', 'Spring Boot'],
      color: 'bg-purple-500/20 text-purple-400'
    },
    {
      title: 'Data Architecture',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Supabase'],
      color: 'bg-green-500/20 text-green-400'
    }
  ];


  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent-primary/30 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-secondary/10 rounded-full blur-[120px]" />
      </div>

      <nav className="relative z-10 container mx-auto px-6 py-8 flex justify-between items-center">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
            <Layout className="text-black w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter">Impact<span className="text-accent-primary">Intel</span></span>
        </motion.div>
        
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden md:flex space-x-8 text-sm font-medium text-gray-400"
        >
          <a href="#" className="hover:text-accent-primary transition-colors">Overview</a>
          <a href="https://gssoc.girlscript.org/leaderboard" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">Leaderboard</a>
          <a href="https://gssoc.girlscript.org/projects" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">Projects</a>
        </motion.div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 pt-12 pb-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-semibold mb-6 border border-accent-primary/20">
              GSSoC 2026 Accepted • Contributor
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Open Source</span> Impact.
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Track your journey through GirlScript Summer of Code 2026. Real-time stats, PR tracking, and impact visualization in one premium command center.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 mb-16"
          >
            <div className="flex items-center justify-center mb-4 space-x-2 text-gray-400 uppercase text-xs tracking-widest font-bold">
              <Calendar size={14} className="text-accent-primary" />
              <span>Contribution Period Starts In</span>
            </div>
            <Countdown targetDate={gssocStartDate} />
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="glass-card p-8 border-t-2 border-t-transparent hover:border-t-accent-primary transition-all duration-500"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-2 rounded-lg ${group.color}`}>
                  <group.icon size={20} />
                </div>
                <h3 className="text-lg font-bold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 flex items-center space-x-4 group"
            >
              <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Spotlight Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Project Spotlight</h2>
              <p className="text-gray-400">Repositories you are currently targeting for GSSoC 2026.</p>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-gray-400 focus-within:border-accent-primary/50 transition-colors">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="bg-transparent border-none outline-none text-sm w-full md:w-64"
              />
            </div>
          </div>

          {/* GSSoC Targets */}
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-6">
              <Star size={16} className="text-yellow-400" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">GSSoC Targets</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interestedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-gray-500 hover:border-accent-primary/30 hover:text-accent-primary transition-all group min-h-[250px]"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-accent-primary/10 transition-colors">
                  <span className="text-2xl font-light">+</span>
                </div>
                <span className="font-bold uppercase tracking-widest text-[10px]">Add GSSoC Target</span>
              </motion.button>
            </div>
          </div>

          {/* My Engineering Work */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Zap size={16} className="text-accent-primary" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">My Engineering Work</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {myProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-gray-500 hover:border-accent-secondary/30 hover:text-accent-secondary transition-all group min-h-[250px]"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-accent-secondary/10 transition-colors">
                  <span className="text-2xl font-light">+</span>
                </div>
                <span className="font-bold uppercase tracking-widest text-[10px]">Add Personal Project</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Action Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="glass-card overflow-hidden relative"
        >
          <div className="p-12 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to climb the leaderboard?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              While we wait for the contribution window, start researching projects that match your stack.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://gssoc.girlscript.org/projects" 
                target="_blank"
                className="px-8 py-4 bg-accent-primary text-black font-bold rounded-xl hover:scale-105 transition-transform w-full sm:w-auto"
              >
                Find Projects
              </a>
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors w-full sm:w-auto">
                Explore Documentation
              </button>
            </div>
          </div>
          {/* Animated gradient strip */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary animate-pulse" />
        </motion.div>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-12 text-center text-gray-500 text-sm">
        <p>© 2026 Impact Intel • Built for Vivek's GSSoC Journey</p>
      </footer>
    </div>
  );
};

export default App;
