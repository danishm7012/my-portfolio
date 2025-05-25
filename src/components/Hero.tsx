'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      {/* Background Animation */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
        <div className='absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000'></div>
        <div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000'></div>
      </div>

      <div className='container-max section-padding text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-5xl md:text-7xl font-bold mb-6'
          >
            Hi, I&apos;m <span className='gradient-text'>Danish Mehmood</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'
          >
            Senior AI Engineer & Full-Stack Architect with 5+ years building
            next-generation applications. Specializing in LLMs, Computer Vision,
            and scalable cloud architecture that powers the future of 2025.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
          >
            <button
              onClick={() =>
                document
                  .querySelector('#projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='btn-primary'
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='btn-secondary'
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='flex justify-center space-x-6'
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href='https://github.com/danishm7012'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <Github size={24} className='text-gray-700' />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href='https://www.linkedin.com/in/danish-mehmood-6b41401b3/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <Linkedin size={24} className='text-gray-700' />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href='mailto:danishm7012@gmail.com'
              className='p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <Mail size={24} className='text-gray-700' />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={scrollToNext}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'
        >
          <ChevronDown size={32} className='text-gray-400' />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
