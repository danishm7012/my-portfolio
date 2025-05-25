'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://github.com/danishm7012',
      icon: <Github size={20} />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/danish-mehmood-6b41401b3/',
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:danishm7012@gmail.com',
      icon: <Mail size={20} />,
      label: 'Email',
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container-max section-padding'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='mb-6 md:mb-0'
          >
            <button
              onClick={scrollToTop}
              className='text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200'
            >
              DM
            </button>
            <p className='text-gray-400 text-sm mt-2'>
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex space-x-6 mb-6 md:mb-0'
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200'
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-center md:text-right'
          >
            <p className='text-gray-400 text-sm flex items-center justify-center md:justify-end'>
              Made with{' '}
              <Heart size={16} className='mx-1 text-red-500 fill-current' />
              by Danish Mehmood
            </p>
            <p className='text-gray-500 text-xs mt-1'>
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>

        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='border-gray-800 my-8'
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='text-center text-gray-500 text-xs'
        >
          <p>
            This portfolio is built with Next.js, TypeScript, Tailwind CSS, and
            Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
