export const AI_CONFIG = {
  DEFAULT_MODEL: 'text-generation',
  MAX_TOKENS: 4096,
  TEMPERATURE: 0.7,
  TOP_P: 0.9,

  // AI-Powered Platform Information
  PLATFORM_NAME: 'ChargedUp AI Marketing Platform',
  PLATFORM_VERSION: '2.1.0',
  PLATFORM_DESCRIPTION:
    'Advanced AI-powered marketing intelligence and content generation platform',

  // Enhanced System Prompt for Marketing AI
  SYSTEM_PROMPT: `You are an AI marketing assistant integrated into the ChargedUp Marketing Platform.

Your capabilities include:
- Marketing strategy development and optimization
- Content creation and social media management
- Brand positioning and market analysis
- Customer engagement and retention strategies
- Digital marketing campaign planning
- Business growth and scaling advice
- Competitive analysis and market research
- ROI optimization and performance tracking

Core Features:
- Real-time market intelligence insights
- Predictive analytics for campaign success
- Personalized content generation
- Multi-channel marketing optimization
- Customer behavior analysis
- Brand voice and messaging consistency

Response Guidelines:
- Provide data-driven insights and actionable recommendations
- Use industry best practices and proven methodologies
- Include specific examples and case studies when relevant
- Maintain professional yet approachable communication
- Focus on measurable results and ROI
- Adapt responses based on user's business context and goals
- Always prioritize user success and business growth

Remember: You are an AI assistant that helps businesses succeed through intelligent marketing insights and strategic guidance.`,
};

export const ERROR_MESSAGES = {
  API_KEY_MISSING: 'AI service authentication failed. Please contact support.',
  AUTHENTICATION_FAILED:
    'Authentication error with AI services. Please try again.',
  RATE_LIMIT:
    'Request limit reached. Please upgrade your plan for unlimited access.',
  GENERIC_ERROR: 'AI service encountered an error. Please try again.',
  NETWORK_ERROR: 'Connection error. Please check your internet and try again.',
  UNAUTHORIZED: 'Access denied. Please log in to use our AI-powered platform.',
};

// AI Platform Capabilities for Marketing
export const AI_CAPABILITIES = {
  MARKETING_STRATEGY:
    'AI-powered strategic marketing planning and optimization',
  CONTENT_CREATION: 'AI-enhanced content generation and optimization',
  SOCIAL_MEDIA: 'AI-driven social media strategy and content management',
  BRAND_ANALYSIS: 'AI-powered brand positioning and market analysis',
  CUSTOMER_INSIGHTS: 'AI-enhanced customer behavior and engagement analysis',
  CAMPAIGN_OPTIMIZATION: 'AI-powered campaign performance and ROI optimization',
  COMPETITIVE_INTELLIGENCE:
    'AI-driven market research and competitive analysis',
  BUSINESS_GROWTH: 'AI-enhanced business scaling and growth strategies',
};

// Platform Performance Metrics
export const AI_METRICS = {
  RESPONSE_TIME: '< 2 seconds',
  ACCURACY_RATE: '94.7%',
  USER_SATISFACTION: '4.9/5.0',
  PROCESSING_POWER: 'Advanced AI Processing',
  TRAINING_DATA: 'Multi-billion parameter AI models',
  UPTIME: '99.9% availability',
};
