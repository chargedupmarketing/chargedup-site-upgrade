import { User, ColdDMUser, AIPlatformUser } from '@/lib/types/auth';

// Mock user data - in production this would come from your database
const MOCK_USERS: (ColdDMUser | AIPlatformUser)[] = [
  // ColdDM Users
  {
    id: '1',
    name: 'John Smith',
    email: 'john@business.com',
    serviceType: 'colddm',
    packageLevel: 'starter',
    subscriptionStatus: 'active',
    createdAt: '2024-01-15',
    lastLoginAt: '2024-01-20',
    features: {
      maxMessages: 1000,
      socialAccounts: 1,
      aiResponses: true,
      analytics: 'basic',
      support: 'email',
      integrations: ['basic'],
    },
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@agency.com',
    serviceType: 'colddm',
    packageLevel: 'professional',
    subscriptionStatus: 'active',
    createdAt: '2024-01-10',
    lastLoginAt: '2024-01-20',
    features: {
      maxMessages: 10000,
      socialAccounts: 3,
      aiResponses: true,
      analytics: 'advanced',
      support: 'priority',
      integrations: ['zapier', 'crm'],
    },
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike@enterprise.com',
    serviceType: 'colddm',
    packageLevel: 'enterprise',
    subscriptionStatus: 'active',
    createdAt: '2024-01-05',
    lastLoginAt: '2024-01-20',
    features: {
      maxMessages: -1, // unlimited
      socialAccounts: -1, // unlimited
      aiResponses: true,
      analytics: 'comprehensive',
      support: 'dedicated',
      integrations: ['zapier', 'make', 'shopify', 'salesforce'],
    },
  },

  // AI Platform Users
  {
    id: '4',
    name: 'Lisa Brown',
    email: 'lisa@startup.com',
    serviceType: 'ai-platform',
    packageLevel: 'free',
    subscriptionStatus: 'active',
    createdAt: '2024-01-12',
    lastLoginAt: '2024-01-20',
    features: {
      maxQueries: 25,
      analytics: 'basic',
      support: 'community',
      integrations: ['basic-api'],
      whiteLabel: false,
      customTraining: false,
    },
  },
  {
    id: '5',
    name: 'David Wilson',
    email: 'david@company.com',
    serviceType: 'ai-platform',
    packageLevel: 'enhanced',
    subscriptionStatus: 'active',
    createdAt: '2024-01-08',
    lastLoginAt: '2024-01-20',
    features: {
      maxQueries: 250,
      analytics: 'enhanced',
      support: 'email',
      integrations: ['priority-api'],
      whiteLabel: false,
      customTraining: false,
    },
  },
  {
    id: '6',
    name: 'Emma Davis',
    email: 'emma@marketing.com',
    serviceType: 'ai-platform',
    packageLevel: 'professional',
    subscriptionStatus: 'active',
    createdAt: '2024-01-03',
    lastLoginAt: '2024-01-20',
    features: {
      maxQueries: 1000,
      analytics: 'advanced',
      support: 'priority',
      integrations: ['custom', 'white-label'],
      whiteLabel: true,
      customTraining: false,
    },
  },
  {
    id: '7',
    name: 'Robert Taylor',
    email: 'robert@enterprise.com',
    serviceType: 'ai-platform',
    packageLevel: 'enterprise',
    subscriptionStatus: 'active',
    createdAt: '2024-01-01',
    lastLoginAt: '2024-01-20',
    features: {
      maxQueries: -1, // unlimited
      analytics: 'custom',
      support: 'dedicated',
      integrations: ['custom', 'on-premise'],
      whiteLabel: true,
      customTraining: true,
    },
  },
];

export class AuthService {
  private static instance: AuthService;
  private currentUser: User | null = null;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(email: string, password: string): Promise<User | null> {
    // In production, this would validate against your backend
    // For now, we'll simulate authentication with mock data
    const user = MOCK_USERS.find(u => u.email === email);

    if (user) {
      this.currentUser = user;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isAuthenticated', 'true');
      return user;
    }

    return null;
  }

  public async loginWithService(
    email: string,
    password: string,
    serviceType: 'colddm' | 'ai-platform'
  ): Promise<User | null> {
    const user = MOCK_USERS.find(
      u => u.email === email && u.serviceType === serviceType
    );

    if (user) {
      this.currentUser = user;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('serviceType', serviceType);
      return user;
    }

    return null;
  }

  public logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('serviceType');
  }

  public getCurrentUser(): User | null {
    if (!this.currentUser) {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.currentUser = JSON.parse(userData);
      }
    }
    return this.currentUser;
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  public getServiceType(): 'colddm' | 'ai-platform' | null {
    const user = this.getCurrentUser();
    return user ? user.serviceType : null;
  }

  public getPackageLevel(): string | null {
    const user = this.getCurrentUser();
    return user ? user.packageLevel : null;
  }

  public hasAccessToTool(toolId: string): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;

    // Import here to avoid circular dependencies
    const { getToolsForUser } = require('./constants/dashboard-tools');
    const availableTools = getToolsForUser(user.serviceType, user.packageLevel);

    return availableTools.some(tool => tool.id === toolId);
  }

  public async refreshUserData(): Promise<void> {
    // In production, this would fetch updated user data from your backend
    const user = this.getCurrentUser();
    if (user) {
      const updatedUser = MOCK_USERS.find(u => u.id === user.id);
      if (updatedUser) {
        this.currentUser = updatedUser;
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    }
  }
}

export const authService = AuthService.getInstance();
