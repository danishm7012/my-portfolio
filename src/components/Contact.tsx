'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  )

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
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

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'danishm7012@gmail.com',
      link: 'mailto:danishm7012@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+92 323 1447956',
      link: 'tel:+923231447956',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Pakistan',
      link: null,
    },
  ]

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='contact' className='py-20 bg-gray-50'>
      <div className='container-max section-padding'>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Get In Touch
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Ready to work together? I&apos;d love to hear about your project
              and discuss how I can help bring your ideas to life.
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <motion.div variants={itemVariants} className='space-y-8'>
              <div>
                <h3 className='text-2xl font-semibold mb-6'>
                  Let&apos;s Connect
                </h3>
                <p className='text-gray-600 mb-8'>
                  I&apos;m always excited to discuss new opportunities, whether
                  it&apos;s a full-time position, freelance project, or just a
                  chat about technology. Feel free to reach out!
                </p>
              </div>

              <div className='space-y-6'>
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    variants={itemVariants}
                    className='flex items-center space-x-4'
                  >
                    <div className='flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600'>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className='font-medium text-gray-900'>
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className='text-gray-600 hover:text-blue-600 transition-colors duration-200'
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className='text-gray-600'>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className='pt-8'>
                <h4 className='font-medium text-gray-900 mb-4'>
                  Available for
                </h4>
                <div className='flex flex-wrap gap-3'>
                  {[
                    'Full-time positions',
                    'Freelance projects',
                    'Consulting',
                    'Technical mentoring',
                  ].map((item) => (
                    <span
                      key={item}
                      className='px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className='bg-white rounded-xl p-8 shadow-lg'
            >
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Name *
                    </label>
                    <input
                      {...register('name')}
                      type='text'
                      id='name'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200'
                      placeholder='Your name'
                    />
                    {errors.name && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type='email'
                      id='email'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200'
                      placeholder='your.email@example.com'
                    />
                    {errors.email && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Subject *
                  </label>
                  <input
                    {...register('subject')}
                    type='text'
                    id='subject'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200'
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className='mt-1 text-sm text-red-600'>
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    id='message'
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none'
                    placeholder='Tell me about your project...'
                  />
                  {errors.message && (
                    <p className='mt-1 text-sm text-red-600'>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className='p-4 bg-green-50 border border-green-200 rounded-lg'>
                    <p className='text-green-800'>
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className='p-4 bg-red-50 border border-red-200 rounded-lg'>
                    <p className='text-red-800'>
                      Something went wrong. Please try again later.
                    </p>
                  </div>
                )}

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? (
                    <div className='flex items-center'>
                      <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2' />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
