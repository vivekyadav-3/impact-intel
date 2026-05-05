import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, AlertCircle, User, Rocket } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card overflow-hidden flex flex-col h-full group"
    >
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-accent-secondary/20 flex items-center justify-center text-accent-secondary">
              <Star size={18} />
            </div>
            <h3 className="text-xl font-bold tracking-tight group-hover:text-accent-primary transition-colors">
              {project.name}
            </h3>
          </div>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex items-center justify-between text-xs font-medium text-gray-500">
        {project.type === 'gssoc' ? (
          <>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <AlertCircle size={14} className="text-accent-primary" />
                <span>{project.openIssues} Issues</span>
              </div>
              <div className="flex items-center space-x-1 text-green-400">
                <Star size={14} />
                <span>{project.goodFirstIssues} First</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <User size={14} />
              <span>{project.maintainer}</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center space-x-2 text-accent-primary">
              <Rocket size={14} />
              <span className="uppercase tracking-widest">{project.status}</span>
            </div>
            <div className="text-gray-400 italic">Self-Managed</div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
