import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaChevronUp } from 'react-icons/fa';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = data?.social || [];

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-secondary/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="inline-block text-3xl font-bold font-heading mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">SJ</span>
            </motion.a>
            <p className="text-text-muted text-sm leading-relaxed">
              Building exceptional digital experiences with clean code and modern design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Resume', 'Projects', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-text-muted hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-text-primary font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((network, index) => (
                <motion.a
                  key={network.name}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary/50 border border-white/10 text-text-muted hover:text-white hover:border-white/20 hover:bg-secondary transition-all duration-300"
                >
                  {network.name.toLowerCase().includes('github') && <FaGithub className="w-5 h-5" />}
                  {network.name.toLowerCase().includes('linkedin') && <FaLinkedin className="w-5 h-5" />}
                  {network.name.toLowerCase().includes('twitter') && <FaTwitter className="w-5 h-5" />}
                  {network.name.toLowerCase().includes('email') && <FaEnvelope className="w-5 h-5" />}
                  {!network.name.toLowerCase().match(/github|linkedin|twitter|email/) && (
                    <i className={network.className}></i>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          {/* Copyright */}
          <p className="text-text-muted text-sm text-center md:text-left">
            &copy; {currentYear} <span className="gradient-text font-medium">{data?.name}</span>. All rights reserved.
          </p>

          {/* Built with */}
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="w-4 h-4 text-red-500" />
            </motion.span>
            <span>and React</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={backToTop}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
            title="Back to Top"
          >
            <FaChevronUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
