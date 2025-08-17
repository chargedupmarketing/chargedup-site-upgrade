import { DashboardTool } from '@/lib/types/auth';

export const DASHBOARD_TOOLS: DashboardTool[] = [
  // Core Tools (Available to all services)
  {
    id: 'overview',
    name: 'Overview',
    description: 'Dashboard overview and key metrics',
    icon: 'Home',
    href: '/dashboard',
    requiredService: 'both',
    requiredLevel: [
      'starter',
      'free',
      'enhanced',
      'professional',
      'enterprise',
    ],
    category: 'core',
  },
  {
    id: 'profile',
    name: 'Profile Settings',
    description: 'Manage your account and preferences',
    icon: 'User',
    href: '/dashboard/profile',
    requiredService: 'both',
    requiredLevel: [
      'starter',
      'free',
      'enhanced',
      'professional',
      'enterprise',
    ],
    category: 'core',
  },
  {
    id: 'billing',
    name: 'Billing & Subscription',
    description: 'Manage your subscription and billing',
    icon: 'CreditCard',
    href: '/dashboard/billing',
    requiredService: 'both',
    requiredLevel: [
      'starter',
      'free',
      'enhanced',
      'professional',
      'enterprise',
    ],
    category: 'core',
  },

  // ColdDM Service Tools
  {
    id: 'chatbot-dashboard',
    name: 'Chatbot Dashboard',
    description: 'Monitor and manage your AI chatbot',
    icon: 'MessageSquare',
    href: '/dashboard/chatbot',
    requiredService: 'colddm',
    requiredLevel: ['starter', 'professional', 'enterprise'],
    category: 'core',
  },
  {
    id: 'message-analytics',
    name: 'Message Analytics',
    description: 'Track chatbot performance and engagement',
    icon: 'BarChart3',
    href: '/dashboard/chatbot/analytics',
    requiredService: 'colddm',
    requiredLevel: ['starter', 'professional', 'enterprise'],
    category: 'analytics',
  },
  {
    id: 'response-templates',
    name: 'Response Templates',
    description: 'Create and manage AI response templates',
    icon: 'Target',
    href: '/dashboard/chatbot/templates',
    requiredService: 'colddm',
    requiredLevel: ['starter', 'professional', 'enterprise'],
    category: 'automation',
  },
  {
    id: 'social-integrations',
    name: 'Social Integrations',
    description: 'Connect and manage social media accounts',
    icon: 'Globe',
    href: '/dashboard/chatbot/integrations',
    requiredService: 'colddm',
    requiredLevel: ['professional', 'enterprise'],
    category: 'integrations',
  },
  {
    id: 'lead-capture',
    name: 'Lead Capture',
    description: 'Automated lead generation and CRM integration',
    icon: 'Users',
    href: '/dashboard/chatbot/leads',
    requiredService: 'colddm',
    requiredLevel: ['professional', 'enterprise'],
    category: 'marketing',
  },
  {
    id: 'campaign-scheduler',
    name: 'Campaign Scheduler',
    description: 'Schedule automated campaigns and autoresponders',
    icon: 'Calendar',
    href: '/dashboard/chatbot/campaigns',
    requiredService: 'colddm',
    requiredLevel: ['professional', 'enterprise'],
    category: 'automation',
  },
  {
    id: 'advanced-analytics',
    name: 'Advanced Analytics',
    description: 'Comprehensive reporting and insights',
    icon: 'TrendingUp',
    href: '/dashboard/chatbot/advanced-analytics',
    requiredService: 'colddm',
    requiredLevel: ['enterprise'],
    category: 'analytics',
  },
  {
    id: 'multi-client',
    name: 'Multi-Client Management',
    description: 'Manage multiple client accounts and white-label options',
    icon: 'Briefcase',
    href: '/dashboard/chatbot/clients',
    requiredService: 'colddm',
    requiredLevel: ['enterprise'],
    category: 'integrations',
  },

  // AI Platform Service Tools
  {
    id: 'ai-insights',
    name: 'AI Marketing Insights',
    description: 'AI-powered marketing intelligence and recommendations',
    icon: 'Brain',
    href: '/dashboard/ai-insights',
    requiredService: 'ai-platform',
    requiredLevel: ['free', 'enhanced', 'professional', 'enterprise'],
    category: 'marketing',
  },
  {
    id: 'content-generator',
    name: 'Content Generator',
    description: 'AI-enhanced content creation and optimization',
    icon: 'Edit3',
    href: '/dashboard/content-generator',
    requiredService: 'ai-platform',
    requiredLevel: ['free', 'enhanced', 'professional', 'enterprise'],
    category: 'content',
  },
  {
    id: 'strategy-planner',
    name: 'Strategy Planner',
    description: 'AI-powered marketing strategy development',
    icon: 'Target',
    href: '/dashboard/strategy-planner',
    requiredService: 'ai-platform',
    requiredLevel: ['enhanced', 'professional', 'enterprise'],
    category: 'marketing',
  },
  {
    id: 'campaign-optimizer',
    name: 'Campaign Optimizer',
    description: 'AI-driven campaign performance optimization',
    icon: 'TrendingUp',
    href: '/dashboard/campaign-optimizer',
    requiredService: 'ai-platform',
    requiredLevel: ['enhanced', 'professional', 'enterprise'],
    category: 'automation',
  },
  {
    id: 'advanced-analytics-ai',
    name: 'Advanced Analytics',
    description: 'Comprehensive marketing analytics and reporting',
    icon: 'BarChart3',
    href: '/dashboard/ai-analytics',
    requiredService: 'ai-platform',
    requiredLevel: ['professional', 'enterprise'],
    category: 'analytics',
  },
  {
    id: 'custom-integrations',
    name: 'Custom Integrations',
    description: 'Connect with your existing business tools',
    icon: 'Link',
    href: '/dashboard/integrations',
    requiredService: 'ai-platform',
    requiredLevel: ['professional', 'enterprise'],
    category: 'integrations',
  },
  {
    id: 'white-label',
    name: 'White-Label Options',
    description: 'Customize the platform with your branding',
    icon: 'Palette',
    href: '/dashboard/white-label',
    requiredService: 'ai-platform',
    requiredLevel: ['professional', 'enterprise'],
    category: 'integrations',
  },
  {
    id: 'custom-ai-training',
    name: 'Custom AI Training',
    description: 'Train AI models on your specific business data',
    icon: 'Cpu',
    href: '/dashboard/ai-training',
    requiredService: 'ai-platform',
    requiredLevel: ['enterprise'],
    category: 'automation',
  },
  {
    id: 'on-premise',
    name: 'On-Premise Deployment',
    description: 'Deploy AI platform on your own infrastructure',
    icon: 'Server',
    href: '/dashboard/deployment',
    requiredService: 'ai-platform',
    requiredLevel: ['enterprise'],
    category: 'integrations',
  },
];

export const getToolsForUser = (
  serviceType: 'colddm' | 'ai-platform',
  packageLevel: string
): DashboardTool[] => {
  return DASHBOARD_TOOLS.filter(
    tool =>
      (tool.requiredService === 'both' ||
        tool.requiredService === serviceType) &&
      tool.requiredLevel.includes(packageLevel)
  );
};

export const getToolsByCategory = (tools: DashboardTool[]) => {
  const categories = {
    core: tools.filter(tool => tool.category === 'core'),
    marketing: tools.filter(tool => tool.category === 'marketing'),
    analytics: tools.filter(tool => tool.category === 'analytics'),
    automation: tools.filter(tool => tool.category === 'automation'),
    content: tools.filter(tool => tool.category === 'content'),
    integrations: tools.filter(tool => tool.category === 'integrations'),
  };

  return categories;
};
