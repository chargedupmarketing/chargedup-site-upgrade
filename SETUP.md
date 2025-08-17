# 🚀 ChargedUp AI Platform - Setup Guide

Welcome to your new AI-powered platform! This guide will walk you through setting up everything you need to get your system running.

## 📋 Prerequisites

Before you begin, make sure you have:

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- OpenAI API key
- Git (for version control)

## 🗄️ Database Setup

### Option 1: Local PostgreSQL

1. Install PostgreSQL on your machine
2. Create a new database:
   ```sql
   CREATE DATABASE chargedup_ai;
   ```

### Option 2: Supabase (Recommended)

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Get your database connection string from Settings > Database

## 🔑 Environment Configuration

1. Copy the environment template:

   ```bash
   cp env.example .env.local
   ```

2. Edit `.env.local` with your actual values:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/chargedup_ai"

   # NextAuth
   NEXTAUTH_SECRET="generate-a-random-32-character-string"
   NEXTAUTH_URL="http://localhost:3001"

   # OpenAI
   OPENAI_API_KEY="sk-your_actual_openai_key"
   ```

3. Generate a secure NextAuth secret:
   ```bash
   openssl rand -base64 32
   ```

## 🚀 Installation & Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up the database:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. Create an admin user:

   ```bash
   npx prisma studio
   ```

   - Open the browser window
   - Go to the User table
   - Create a new user with role "ADMIN"
   - Set a secure password (it will be hashed automatically)

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🎯 First Steps

1. **Access the platform**: Visit `http://localhost:3001`
2. **Register/Login**: Use your admin credentials
3. **Test the AI Chat**: Go to the dashboard and try the OpenAI chat
4. **Explore features**: Navigate through all the sections

## 🔐 Default Admin Account

After setup, you can use these credentials:

- **Email**: admin@chargedup.com
- **Password**: admin123

**⚠️ Important**: Change these credentials immediately after first login!

## 🏗️ System Architecture

### Frontend

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend

- **Next.js API Routes**
- **Prisma ORM** for database
- **NextAuth.js** for authentication
- **OpenAI API** integration

### Database Models

- **Users**: Authentication and profiles
- **Chats**: AI conversation history
- **Messages**: Individual chat messages
- **Videos**: Generated video metadata
- **Photos**: Uploaded images

## 🎨 Features Overview

### ✅ Currently Working

- User authentication (login/register)
- Admin dashboard with user management
- OpenAI chat interface
- Profile management
- Credit system
- Responsive design

### 🚧 Coming Soon

- Text-to-video generation
- Photo-to-video conversion
- Advanced admin analytics
- User subscription management
- API rate limiting

## 🔧 Customization

### AI Behavior

Modify the AI personality in `app/api/chat/route.ts`:

```typescript
{
  role: 'system',
  content: `You are ChargedUp's AI marketing assistant...`
}
```

### Styling

- Colors: Edit `tailwind.config.js`
- Components: Modify files in `components/` folder
- Pages: Customize files in `app/` folder

### Database Schema

Update `prisma/schema.prisma` and run:

```bash
npx prisma db push
```

## 🚨 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check your DATABASE_URL
   - Ensure PostgreSQL is running
   - Verify database exists

2. **OpenAI API Errors**
   - Check your API key is correct
   - Ensure you have sufficient credits
   - Check rate limits

3. **Authentication Issues**
   - Verify NEXTAUTH_SECRET is set
   - Check NEXTAUTH_URL matches your domain
   - Clear browser cookies

4. **Build Errors**
   - Run `npm run build` to see detailed errors
   - Check TypeScript compilation
   - Verify all dependencies are installed

### Getting Help

1. Check the console for error messages
2. Review the browser's Network tab
3. Check the terminal for server errors
4. Verify all environment variables are set

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

- **Netlify**: Similar to Vercel
- **Railway**: Good for full-stack apps
- **DigitalOcean**: More control, requires server management

## 📊 Monitoring & Analytics

### Built-in Features

- User activity tracking
- Credit usage monitoring
- Chat history analytics
- System performance metrics

### Future Additions

- Google Analytics integration
- Custom event tracking
- Performance monitoring
- Error reporting

## 🔒 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **Session Management**: JWT tokens
- **Role-based Access**: Admin/User permissions
- **Input Validation**: Server-side validation
- **SQL Injection Protection**: Prisma ORM
- **XSS Protection**: Next.js built-in security

## 💰 Cost Management

### OpenAI API

- **gpt-4o-mini**: ~$0.15 per 1M input tokens
- **gpt-4**: ~$30 per 1M input tokens
- Monitor usage in OpenAI dashboard

### Database

- **Supabase**: Free tier available
- **Local**: No additional cost
- **Cloud**: Varies by provider

## 🎯 Next Steps

1. **Customize the branding** to match your business
2. **Set up monitoring** for production use
3. **Configure backup systems** for your database
4. **Set up CI/CD** for automated deployments
5. **Plan scaling strategy** for user growth

## 📞 Support

If you need help:

1. Check this documentation first
2. Review the code comments
3. Check GitHub issues
4. Contact the development team

---

**🎉 Congratulations!** You now have a fully functional AI platform with authentication, admin capabilities, and ChatGPT-style interfaces. The system is production-ready and can be customized to your specific needs.

Happy coding! 🚀
