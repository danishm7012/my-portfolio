'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Advanced AI & LLMs',
      skills: [
        { name: 'GPT-4o/Claude 3.5', level: 98 },
        { name: 'LangChain/LlamaIndex', level: 95 },
        { name: 'Multi-Agent Systems', level: 92 },
        { name: 'RAG Architecture', level: 96 },
        { name: 'Fine-tuning/PEFT', level: 90 },
        { name: 'Vector Databases', level: 93 },
      ],
    },
    {
      title: 'ML & Computer Vision',
      skills: [
        { name: 'PyTorch/TensorFlow', level: 96 },
        { name: 'YOLO v8+/Detection', level: 94 },
        { name: 'Transformer Models', level: 93 },
        { name: 'Edge AI/TensorRT', level: 88 },
        { name: 'MLOps/MLflow', level: 91 },
        { name: 'Distributed Training', level: 89 },
      ],
    },
    {
      title: 'Enterprise Architecture',
      skills: [
        { name: 'Kubernetes/Docker', level: 94 },
        { name: 'Microservices/gRPC', level: 96 },
        { name: 'AWS/GCP/Azure', level: 92 },
        { name: 'Serverless/Edge', level: 90 },
        { name: 'Real-time Systems', level: 95 },
        { name: 'Performance Optimization', level: 97 },
      ],
    },
    {
      title: 'Modern Development',
      skills: [
        { name: 'Next.js 15/React 19', level: 98 },
        { name: 'TypeScript/Rust', level: 95 },
        { name: 'WebGPU/WASM', level: 85 },
        { name: 'Streaming/WebRTC', level: 90 },
        { name: 'Database Design', level: 93 },
        { name: 'Security/Auth', level: 91 },
      ],
    },
  ]

  return (
    <section id='skills' className='py-20 bg-white'>
      <div className='container-max section-padding'>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Skills & Technologies
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Here are the technologies and tools I work with to bring ideas to
              life.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className='bg-white p-6 rounded-xl shadow-lg'
              >
                <div className='flex items-center mb-4'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    {category.title}
                  </h3>
                </div>
                <div className='space-y-4'>
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-gray-700 font-medium'>
                          {skill.name}
                        </span>
                        <span className='text-blue-600 font-medium'>
                          {skill.level}%
                        </span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2'>
                        <motion.div
                          className='bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full'
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className='mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8'
          >
            <h3 className='text-2xl font-semibold mb-4'>
              Staying Ahead in 2025
            </h3>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              As a senior engineer, I continuously research and implement
              cutting-edge technologies. Currently exploring Multimodal AI,
              Quantum Computing applications, and the next generation of
              foundation models that will shape the industry beyond 2025.
            </p>
            <div className='flex flex-wrap justify-center gap-3 mt-6'>
              {[
                'Multimodal AI',
                'Quantum ML',
                'Neuromorphic Computing',
                'Agent Swarms',
                'WebGPU Compute',
              ].map((tech) => (
                <span
                  key={tech}
                  className='px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='text-center'>
            <p className='text-xl text-gray-600'>
              Leading the future of AI-driven development. Ready to architect
              your next breakthrough solution.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
