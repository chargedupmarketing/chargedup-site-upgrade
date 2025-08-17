// Simple authentication system for testing without database
export interface SimpleUser {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
  credits: number;
}

export const TEST_USERS: SimpleUser[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@chargedup.com',
    role: 'ADMIN',
    credits: 100
  },
  {
    id: '2',
    name: 'Demo User',
    email: 'demo@chargedup.com',
    role: 'USER',
    credits: 10
  }
];

export function authenticateUser(email: string, password: string): SimpleUser | null {
  // Simple password check for testing
  if (email === 'admin@chargedup.com' && password === 'admin123') {
    return TEST_USERS[0];
  }
  if (email === 'demo@chargedup.com' && password === 'demo123') {
    return TEST_USERS[1];
  }
  return null;
}

export function getUserById(id: string): SimpleUser | null {
  return TEST_USERS.find(user => user.id === id) || null;
}
