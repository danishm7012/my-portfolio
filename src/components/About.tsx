'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const features = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description:
        'Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.',
    },
    {
      icon: <Database size={24} />,
      title: 'Backend Development',
      description:
        'Building robust APIs and server-side applications with Node.js, Express, and various databases.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Full-Stack Solutions',
      description:
        'Developing end-to-end web applications with seamless integration between frontend and backend.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile-First Design',
      description:
        'Ensuring optimal user experience across all devices with responsive and progressive design.',
    },
  ]

  return (
    <section id='about' className='py-20 bg-white'>
      <div className='container-max section-padding'>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>About Me</h2>
            <p className='text-lg text-gray-600 leading-relaxed'>
              I&apos;m a passionate fullstack developer with expertise in modern
              web technologies. I love creating beautiful, functional
              applications that solve real-world problems and provide
              exceptional user experiences.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed'>
              With a strong foundation in both frontend and backend development,
              I specialize in React, Next.js, Node.js, and various databases.
              I&apos;m always eager to learn new technologies and take on
              challenging projects.
            </p>
            <div className='flex flex-wrap gap-3 mt-6'>
              {[
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Python',
                'PostgreSQL',
                'MongoDB',
              ].map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div variants={itemVariants} className='space-y-6'>
              <h3 className='text-2xl font-semibold mb-4'>My Journey</h3>
              <p className='text-gray-600 leading-relaxed'>
                With several years of experience in web development, I&apos;ve
                had the privilege of working on diverse projects ranging from
                small business websites to large-scale applications. My journey
                began with a curiosity about how websites work, and it has
                evolved into a passion for creating seamless digital
                experiences.
              </p>
              <p className='text-gray-600 leading-relaxed'>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest technologies and best practices. My
                approach combines technical expertise with creative
                problem-solving to deliver solutions that not only work well but
                also provide exceptional user experiences.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='grid grid-cols-1 md:grid-cols-2 gap-6'
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                >
                  <div className='text-blue-600 mb-4'>{feature.icon}</div>
                  <h4 className='text-lg font-semibold mb-2'>
                    {feature.title}
                  </h4>
                  <p className='text-gray-600 text-sm'>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
