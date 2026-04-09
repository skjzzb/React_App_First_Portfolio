import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaTrophy,
  FaJava,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiGraphql,
  SiJenkins,
  SiTerraform,
  SiLinux,
} from 'react-icons/si';

const Resume = ({ data }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Skill icon mapping
  const skillIcons = {
    java: FaJava,
    'spring boot': SiSpringboot,
    springboot: SiSpringboot,
    react: FaReact,
    angular: SiAngular,
    typescript: SiTypescript,
    javascript: SiJavascript,
    js: SiJavascript,
    node: FaNodeJs,
    nodejs: FaNodeJs,
    python: FaPython,
    postgresql: SiPostgresql,
    postgres: SiPostgresql,
    mongodb: SiMongodb,
    redis: SiRedis,
    docker: FaDocker,
    kubernetes: SiKubernetes,
    aws: FaAws,
    git: FaGitAlt,
    'microservices': FaCode,
    'rest api': FaCode,
    rest: FaCode,
    graphql: SiGraphql,
    jenkins: SiJenkins,
    terraform: SiTerraform,
    linux: SiLinux,
    sql: FaDatabase,
    database: FaDatabase,
  };

  const getSkillIcon = (skillName) => {
    const normalized = skillName.toLowerCase().replace(/[^a-z0-9]/g, '');
    return skillIcons[normalized] || FaCode;
  };

  return (
    <section id="resume" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto rounded-full mb-4" />
          <p className="text-text-muted max-w-2xl mx-auto">
            A timeline of my professional experience, education, and technical expertise
          </p>
        </motion.div>

        {/* Experience & Education Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <FaBriefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-6">
              {data?.work?.map((job, index) => (
                <motion.div
                  key={job.company + job.years}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="timeline-item"
                >
                  <div className="glass-card p-6 hover:border-purple-500/30 transition-colors duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-text-primary">
                          {job.title}
                        </h4>
                        <p className="text-purple-400 font-medium">{job.company}</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full whitespace-nowrap">
                        {job.years}
                      </span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <FaGraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {data?.education?.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="timeline-item"
                >
                  <div className="glass-card p-6 hover:border-blue-500/30 transition-colors duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-text-primary">
                          {edu.school}
                        </h4>
                        <p className="text-blue-400 font-medium">{edu.degree}</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full whitespace-nowrap">
                        {edu.graduated}
                      </span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
              <FaCode className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Technical Skills</h3>
          </div>

          <p className="text-text-muted mb-8 max-w-3xl">
            {data?.skillmessage}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {data?.skills?.map((skill, index) => {
              const IconComponent = getSkillIcon(skill.name);
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 text-center group cursor-pointer"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:via-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                    <IconComponent className="w-6 h-6 gradient-text" />
                  </div>
                  <p className="text-sm font-medium text-text-primary group-hover:gradient-text transition-all duration-300">
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Awards Section */}
        {data?.awards && data.awards.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <FaTrophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Awards & Recognition</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {data.awards.map((award, index) => (
                <motion.div
                  key={award.title + award.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 border-l-4 border-l-yellow-500"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-text-primary">
                      <FaTrophy className="inline-block w-5 h-5 text-yellow-500 mr-2" />
                      {award.title}
                    </h4>
                    <span className="px-3 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-300 rounded-full whitespace-nowrap">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm">
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Resume;
