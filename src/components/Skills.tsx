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
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'GraphQL', level: 75 },
        { name: 'REST APIs', level: 95 },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 88 },
        { name: 'Redis', level: 75 },
        { name: 'Prisma', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
      ],
    },
    {
      title: 'Other Technologies',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Testing (Jest)', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Figma', level: 85 },
        { name: 'Socket.io', level: 80 },
        { name: 'Stripe API', level: 85 },
      ],
    },
  ]

  const SkillBar = ({ name, level }: { name: string; level: number }) => {
    return (
      <div className='mb-4'>
        <div className='flex justify-between mb-2'>
          <span className='text-sm font-medium text-gray-700'>{name}</span>
          <span className='text-sm text-gray-500'>{level}%</span>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2'>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full'
          />
        </div>
      </div>
    )
  }

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
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className='bg-gray-50 rounded-xl p-6 card-hover'
              >
                <h3 className='text-xl font-semibold mb-6 text-center gradient-text'>
                  {category.title}
                </h3>
                <div className='space-y-4'>
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
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
            <h3 className='text-2xl font-semibold mb-4'>Always Learning</h3>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Technology evolves rapidly, and I'm committed to continuous
              learning. I regularly explore new frameworks, tools, and best
              practices to stay current with industry trends and deliver
              cutting-edge solutions.
            </p>
            <div className='flex flex-wrap justify-center gap-3 mt-6'>
              {[
                'Machine Learning',
                'Blockchain',
                'WebAssembly',
                'Microservices',
                'DevOps',
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
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
