export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  serviceType: 'colddm' | 'ai-platform';
  packageLevel: string;
  subscriptionStatus: 'active' | 'trial' | 'expired' | 'cancelled';
  trialEndsAt?: string;
  subscriptionEndsAt?: string;
  createdAt: string;
  lastLoginAt: string;
}

export interface ColdDMUser extends User {
  serviceType: 'colddm';
  packageLevel: 'starter' | 'professional' | 'enterprise';
  features: {
    maxMessages: number;
    socialAccounts: number;
    aiResponses: boolean;
    analytics: 'basic' | 'advanced' | 'comprehensive';
    support: 'email' | 'priority' | 'dedicated';
    integrations: string[];
  };
}

export interface AIPlatformUser extends User {
  serviceType: 'ai-platform';
  packageLevel: 'free' | 'enhanced' | 'professional' | 'enterprise';
  features: {
    maxQueries: number;
    analytics: 'basic' | 'enhanced' | 'advanced' | 'custom';
    support: 'community' | 'email' | 'priority' | 'dedicated';
    integrations: string[];
    whiteLabel: boolean;
    customTraining: boolean;
  };
}

export interface DashboardTool {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  requiredService: 'colddm' | 'ai-platform' | 'both';
  requiredLevel: string[];
  category:
    | 'core'
    | 'marketing'
    | 'analytics'
    | 'automation'
    | 'content'
    | 'integrations';
}

export interface ServicePackage {
  id: string;
  name: string;
  serviceType: 'colddm' | 'ai-platform';
  price: string;
  features: string[];
  tools: string[]; // Tool IDs that are available
}
