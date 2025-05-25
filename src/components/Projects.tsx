'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.',
      image: 'https://picsum.photos/600/400?random=1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://picsum.photos/600/400?random=2',
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Socket.io',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics using multiple APIs.',
      image: 'https://picsum.photos/600/400?random=3',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and automated reporting.',
      image: 'https://picsum.photos/600/400?random=4',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Real Estate Platform',
      description:
        'A modern real estate platform with property listings, virtual tours, mortgage calculator, and advanced search filters.',
      image: 'https://picsum.photos/600/400?random=5',
      technologies: ['Next.js', 'Mapbox', 'Prisma', 'Cloudinary', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Learning Management System',
      description:
        'An educational platform with course creation, video streaming, progress tracking, and interactive quizzes for online learning.',
      image: 'https://picsum.photos/600/400?random=6',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'JWT'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ]

  return (
    <section id='projects' className='py-20 bg-gray-50'>
      <div className='container-max section-padding'>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>My Projects</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Here are some of the projects I&apos;ve built using various
              technologies and frameworks.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className='group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
              >
                <div className='relative h-48 overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100'>
                    <div className='flex space-x-4'>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200'
                      >
                        <Github size={20} className='text-gray-700' />
                      </a>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200'
                      >
                        <ExternalLink size={20} className='text-gray-700' />
                      </a>
                    </div>
                  </div>
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-3'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='flex space-x-4'>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200'
                    >
                      <Github size={16} className='mr-1' />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200'
                    >
                      <ExternalLink size={16} className='mr-1' />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
