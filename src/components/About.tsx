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
      title: 'AI-Powered Development',
      description:
        'Building intelligent applications with machine learning, NLP, and computer vision using TensorFlow, PyTorch, and OpenAI APIs.',
    },
    {
      icon: <Database size={24} />,
      title: 'Scalable Architecture',
      description:
        'Designing robust cloud-native systems with microservices, real-time processing, and distributed databases for high-performance applications.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Modern Web Solutions',
      description:
        'Creating cutting-edge web applications with Next.js, TypeScript, and advanced features like WebRTC, WebGL, and progressive web technologies.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Intelligent User Experience',
      description:
        'Integrating AI capabilities seamlessly into intuitive interfaces with real-time features, smart automation, and personalized user interactions.',
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
              Senior AI Engineer and Full-Stack Architect with 5+ years of
              professional experience building production-grade applications. I
              specialize in cutting-edge AI technologies including Large
              Language Models, Computer Vision, and Multi-Agent Systems that
              define the technological landscape of 2025.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed'>
              My expertise spans from architecting scalable cloud-native
              solutions to implementing advanced AI pipelines using the latest
              frameworks. I&apos;ve successfully delivered enterprise-level
              applications leveraging GPT-4o, Claude 3.5, custom fine-tuned
              models, and emerging technologies like WebGPU and Edge AI
              computing.
            </p>
            <div className='flex flex-wrap gap-3 mt-6'>
              {[
                'GPT-4o/Claude 3.5',
                'LangChain/LlamaIndex',
                'Multi-Agent AI',
                'WebGPU/WASM',
                'Next.js 15',
                'Edge Computing',
                'Vector DBs',
                'Serverless AI',
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
              <h3 className='text-2xl font-semibold mb-4'>
                Professional Journey
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                With 5+ years in enterprise software development, I&apos;ve led
                cross-functional teams in building AI-first applications that
                serve millions of users. My career spans from startup
                environments to Fortune 500 companies, where I&apos;ve
                architected systems handling petabytes of data and implemented
                ML models achieving 99.9% accuracy in production.
              </p>
              <p className='text-gray-600 leading-relaxed'>
                I stay at the forefront of technology by continuously exploring
                emerging paradigms like Multi-Agent AI, Edge Computing, and the
                latest developments in foundation models. My approach combines
                deep technical expertise with strategic thinking to deliver
                solutions that drive business value and set new industry
                standards.
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
