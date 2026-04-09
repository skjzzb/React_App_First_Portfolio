import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Portfolio = ({ data }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Tech stack color mapping
  const techColors = {
    react: 'from-cyan-500 to-blue-500',
    angular: 'from-red-500 to-orange-500',
    vue: 'from-green-500 to-emerald-500',
    java: 'from-orange-500 to-red-500',
    'spring boot': 'from-green-500 to-lime-500',
    'node.js': 'from-green-600 to-emerald-600',
    python: 'from-blue-500 to-yellow-500',
    postgresql: 'from-blue-600 to-indigo-600',
    mongodb: 'from-green-500 to-emerald-500',
    docker: 'from-blue-500 to-cyan-500',
    kubernetes: 'from-blue-600 to-purple-600',
    aws: 'from-orange-500 to-yellow-500',
    typescript: 'from-blue-500 to-cyan-500',
    javascript: 'from-yellow-400 to-orange-400',
    mysql: 'from-blue-500 to-blue-700',
    redis: 'from-red-500 to-pink-500',
    kafka: 'from-purple-500 to-indigo-500',
    elasticsearch: 'from-green-500 to-teal-500',
    graphql: 'from-pink-500 to-purple-500',
    rest: 'from-blue-400 to-cyan-400',
    microservices: 'from-indigo-500 to-purple-500',
    jenkins: 'from-red-600 to-red-800',
    terraform: 'from-purple-500 to-indigo-500',
    linux: 'from-yellow-600 to-orange-600',
    git: 'from-orange-500 to-red-500',
  };

  const getTechColor = (tech) => {
    const normalized = tech.toLowerCase().trim();
    return techColors[normalized] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="portfolio" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-text-muted max-w-2xl mx-auto">
            {data?.projects?.intro || 'A selection of enterprise and personal projects I\'ve contributed to.'}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.projects?.map((project, index) => {
            const projectImage = `images/portfolio/${project.image}`;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass-card overflow-hidden h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={projectImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/600x400/1e293b/94a3b8?text=Project+Image';
                      }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="flex gap-3">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <FaGithub className="w-5 h-5" />
                          </motion.a>
                        )}
                        {project.url && (
                          <motion.a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                      {project.description || project.category}
                    </p>

                    {/* Tech Stack Tags */}
                    {project.tech && (
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(', ').map((tech) => {
                          const trimmed = tech.trim();
                          return (
                            <span
                              key={trimmed}
                              className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getTechColor(trimmed)} text-white shadow-lg`}
                            >
                              {trimmed}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More CTA */}
        {data?.projects?.moreLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href={data.projects.moreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
              View More on GitHub
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
