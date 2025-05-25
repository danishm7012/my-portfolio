import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    console.log('📧 Email configuration:', {
      user: process.env.GMAIL_USER,
      hasPassword: !!process.env.GMAIL_APP_PASSWORD,
    })

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    })

    console.log('📝 Sending emails to:', {
      recipient: 'danishm7012@gmail.com',
      autoReplyTo: email,
      from: process.env.GMAIL_USER,
    })

    // Email content for you (the recipient)
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'danishm7012@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent from your portfolio contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    }

    // Auto-reply email to the sender
    const autoReplyOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Danish Mehmood',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You for Getting in Touch!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>I typically respond within 24-48 hours. If your inquiry is urgent, you can also reach me directly at:</p>
          
          <ul style="color: #4b5563;">
            <li>📧 Email: danishm7012@gmail.com</li>
            <li>📞 Phone: +92 323 1447956</li>
            <li>💼 LinkedIn: <a href="https://www.linkedin.com/in/danish-mehmood-6b41401b3/" style="color: #2563eb;">Danish Mehmood</a></li>
          </ul>
          
          <p>Best regards,<br><strong>Danish Mehmood</strong><br>Fullstack Developer</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 12px;">
            This is an automated response. Please reply directly to danishm7012@gmail.com for faster communication.
          </p>
        </div>
      `,
    }

    // Send both emails
    console.log('📬 Sending main notification email...')
    const mainResult = await transporter.sendMail(mailOptions)
    console.log('✅ Main email sent:', mainResult.messageId)

    console.log('📩 Sending auto-reply email...')
    const autoReplyResult = await transporter.sendMail(autoReplyOptions)
    console.log('✅ Auto-reply sent:', autoReplyResult.messageId)

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
