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
      title: 'Enterprise Multi-Agent AI Platform',
      description:
        'Production-scale AI orchestration platform serving 10M+ users with GPT-4o, Claude 3.5, and custom fine-tuned models. Features autonomous agent coordination, real-time inference optimization, and enterprise-grade security with 99.99% uptime.',
      image: 'https://picsum.photos/600/400?random=21',
      technologies: [
        'LangChain',
        'GPT-4o',
        'Claude 3.5',
        'Vector DBs',
        'Kubernetes',
        'Redis',
      ],
      githubUrl: 'https://github.com/danishm7012',
      liveUrl: 'https://multi-agent-platform.ai',
    },
    {
      title: 'Real-time Computer Vision Pipeline',
      description:
        'Advanced CV system processing 1M+ images daily with custom YOLO v8+ models and WebGPU acceleration. Deployed on edge devices with 50ms latency, featuring automated model versioning and A/B testing infrastructure.',
      image: 'https://picsum.photos/600/400?random=22',
      technologies: [
        'YOLO v8+',
        'WebGPU',
        'TensorRT',
        'Edge AI',
        'Rust',
        'gRPC',
      ],
      githubUrl: 'https://github.com/danishm7012',
      liveUrl: 'https://cv-pipeline.tech',
    },
    {
      title: 'Autonomous Trading Infrastructure',
      description:
        'High-frequency AI trading platform with microsecond latency, processing $50M+ daily volume. Features sentiment analysis from 100+ sources, risk management algorithms, and real-time market prediction using transformer architectures.',
      image: 'https://picsum.photos/600/400?random=23',
      technologies: [
        'Rust',
        'ClickHouse',
        'Transformers',
        'WebSocket',
        'Kafka',
        'TimescaleDB',
      ],
      githubUrl: 'https://github.com/danishm7012',
      liveUrl: 'https://trading-ai.platform',
    },
    {
      title: 'Next-Gen RAG Knowledge System',
      description:
        'Enterprise knowledge platform with advanced RAG architecture, supporting 500+ concurrent users. Features semantic chunking, multi-modal embeddings, and real-time knowledge graph updates with 95% accuracy in complex queries.',
      image: 'https://picsum.photos/600/400?random=24',
      technologies: [
        'LlamaIndex',
        'ChromaDB',
        'Ollama',
        'FastAPI',
        'Neo4j',
        'Embedding Models',
      ],
      githubUrl: 'https://github.com/danishm7012',
      liveUrl: 'https://knowledge-rag.ai',
    },
    {
      title: 'Serverless AI Content Engine',
      description:
        'Scalable content generation platform with GPT-4o, DALL-E 3, and custom models. Auto-scales to handle viral traffic spikes, features multi-language support, brand voice adaptation, and generates 1M+ pieces monthly.',
      image: 'https://picsum.photos/600/400?random=25',
      technologies: [
        'Next.js 15',
        'Vercel AI SDK',
        'Supabase',
        'Replicate',
        'Stripe',
        'Edge Functions',
      ],
      githubUrl: 'https://github.com/danishm7012',
      liveUrl: 'https://content-engine.ai',
    },
    {
      title: 'Distributed ML Training Platform',
      description:
        'Cloud-native platform for distributed model training with automatic resource optimization. Supports multi-GPU clusters, gradient compression, and federated learning with 10x faster training times and cost optimization.',
      image: 'https://picsum.photos/600/400?random=26',
      technologies: [
        'PyTorch',
        'Ray',
        'CUDA',
        'Docker',
        'MLflow',
        'Prometheus',
      ],
      githubUrl: 'https://github.com/danishm7012',
      liveUrl: 'https://ml-training.cloud',
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
