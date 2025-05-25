# Danish Shah - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills as a fullstack developer with smooth animations, interactive components, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient effects and smooth animations
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Functional contact form with validation using React Hook Form and Zod
- **Smooth Scrolling**: Seamless navigation between sections
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **TypeScript**: Fully typed for better development experience
- **Performance Optimized**: Built with Next.js for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel deployment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher)
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── About.tsx            # About section component
│   ├── Contact.tsx          # Contact form component
│   ├── Footer.tsx           # Footer component
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero/landing section
│   ├── Projects.tsx         # Projects showcase
│   └── Skills.tsx           # Skills and technologies
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **src/app/layout.tsx** - Update metadata (title, description, keywords)
2. **src/components/Hero.tsx** - Update name, description, and social links
3. **src/components/About.tsx** - Update your journey, skills, and technologies
4. **src/components/Projects.tsx** - Add your actual projects with real URLs and images
5. **src/components/Contact.tsx** - Update contact information and email

### Styling

- Modify color schemes in **src/app/globals.css**
- Adjust spacing and layouts in individual components
- Update gradient colors by changing the `gradient-text` class

### Adding New Sections

1. Create a new component in the `src/components` folder
2. Import and add it to `src/app/page.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Other Deployment Options

- **Netlify**: Connect your GitHub repo for automatic deployments
- **GitHub Pages**: Use `next export` for static deployment
- **Docker**: Use the included Dockerfile for containerized deployment

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **Static Generation**: Pre-rendered pages for better SEO
- **Font Optimization**: Optimized Google Fonts loading

## 🤝 Contact Form Integration

The contact form is ready for backend integration. To make it functional:

1. **Create an API route** in `src/app/api/contact/route.ts`
2. **Update the form submission** in `src/components/Contact.tsx`
3. **Add email service** (SendGrid, Nodemailer, etc.)

Example API route:

```typescript
// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()

  // Process form data
  // Send email
  // Return response

  return NextResponse.json({ success: true })
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Unsplash** for placeholder images

---

Built with ❤️ by Danish Shah

## 📧 Email Configuration

The contact form is fully integrated with Gmail SMTP. Follow these steps to set it up:

### 1. Gmail App Password Setup

1. **Enable 2-Factor Authentication** on your Gmail account (required for app passwords)
2. **Generate an App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Copy the 16-character password generated

### 2. Environment Variables

1. **Create `.env.local` file** in the root directory:

   ```bash
   # Gmail Configuration for Contact Form
   GMAIL_USER=danishm7012@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   ```

2. **Replace `your-16-character-app-password`** with the actual app password from step 1

### 3. Email Features

- **Contact Notifications**: You'll receive formatted emails with contact details and messages
- **Auto-Reply**: Visitors get an automatic thank you email with your contact information
- **Professional Formatting**: HTML-formatted emails with your branding
- **Error Handling**: Proper error messages and success notifications

### 4. Testing the Contact Form

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Navigate to the contact section on your portfolio
3. Fill out and submit the form
4. Check your Gmail for the contact notification
5. The sender should receive an auto-reply email

### 5. Customization

Update the email templates in `src/app/api/contact/route.ts`:

- **Subject lines**: Modify the email subjects
- **Email content**: Customize the HTML templates
- **Auto-reply message**: Personalize the automatic response
- **Contact information**: Update your details in the auto-reply

## 🤝 Contact Form Integration

The contact form includes:

✅ **Form Validation**: Real-time validation with helpful error messages  
✅ **Email Delivery**: Messages sent directly to danishm7012@gmail.com  
✅ **Auto-Reply**: Automatic thank you emails to form submitters  
✅ **Loading States**: Visual feedback during form submission  
✅ **Success/Error Handling**: Clear status messages for users  
✅ **Responsive Design**: Works perfectly on all devices
