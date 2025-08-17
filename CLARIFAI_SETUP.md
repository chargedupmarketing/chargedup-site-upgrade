# 🚀 Clarifai AI Chat Setup Guide

## 🔑 **Get Your Clarifai API Key**

1. **Go to Clarifai Portal**: https://portal.clarifai.com/
2. **Sign up/Login** to your account
3. **Navigate to Settings** → **Security**
4. **Create a new PAT** (Personal Access Token)
5. **Copy the PAT** - it looks like: `4d71c*****`

## ⚙️ **Configure Environment Variables**

1. **Create `.env.local`** file in your project root
2. **Add your Clarifai PAT**:
   ```bash
   CLARIFAI_PAT="your_actual_pat_here"
   ```

## 🎯 **What You Get with Clarifai**

✅ **Powerful AI Models**: Access to GPT-OSS-120B and other models
✅ **No Rate Limits**: More generous usage than OpenAI
✅ **Better Pricing**: Often more cost-effective
✅ **Reliable API**: Stable and fast responses
✅ **Personalized AI**: Each user gets tailored responses

## 🧪 **Test Your Setup**

1. **Restart your dev server**: `npm run dev`
2. **Go to**: `http://localhost:3002/dashboard/ai-chat`
3. **Login** with demo account: `demo@chargedup.com` / `demo123`
4. **Start chatting** - your AI will now use Clarifai!

## 🔧 **Troubleshooting**

**If you get authentication errors:**

- Check your PAT is correct in `.env.local`
- Ensure the PAT has the right permissions
- Restart the development server

**If responses are slow:**

- This is normal for the first few requests
- Clarifai will cache and speed up subsequent calls

## 📚 **Available Models**

- **GPT-OSS-120B**: Main chat model (recommended)
- **Claude-3**: Alternative for complex reasoning
- **Llama-2**: Open source option
- **Custom Models**: Build your own specialized AI

## 💡 **Pro Tips**

- **Save your PAT securely** - don't commit it to git
- **Monitor usage** in your Clarifai dashboard
- **Use different models** for different use cases
- **Personalize responses** by adjusting temperature and top_p

Your AI chat is now powered by Clarifai! 🎉
