'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='container-max section-padding'>
        <div className='flex items-center justify-between h-16'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='text-2xl font-bold gradient-text cursor-pointer'
            onClick={() => scrollToSection('#home')}
          >
            DM
          </motion.div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className='text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium'
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 mt-2 rounded-lg'
          >
            <div className='py-4 space-y-2'>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className='block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200'
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header
