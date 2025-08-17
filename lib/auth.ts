// Enhanced admin authentication system with multiple users
interface AdminCredentials {
  username: string;
  password: string;
  role: 'super_admin' | 'admin' | 'employee';
  name: string;
}

// Add your admin users here
const ADMIN_USERS: AdminCredentials[] = [
  {
    username: 'superadmin',
    password: 'chargedup2024',
    role: 'super_admin',
    name: 'Super Administrator',
  },
  {
    username: 'admin',
    password: 'admin2024',
    role: 'admin',
    name: 'Administrator',
  },
  {
    username: 'employee',
    password: 'employee2024',
    role: 'employee',
    name: 'Team Member',
  },
  // Add more users as needed:
  // {
  //   username: 'your_username',
  //   password: 'your_password',
  //   role: 'admin',
  //   name: 'Your Name'
  // }
];

export interface AdminUser {
  username: string;
  isAuthenticated: boolean;
  role: string;
  name: string;
}

export function authenticateAdmin(
  username: string,
  password: string
): AdminCredentials | null {
  const user = ADMIN_USERS.find(
    u => u.username === username && u.password === password
  );
  return user || null;
}

export function createAdminSession(credentials: AdminCredentials): AdminUser {
  return {
    username: credentials.username,
    isAuthenticated: true,
    role: credentials.role,
    name: credentials.name,
  };
}

export function clearAdminSession(): AdminUser {
  return {
    username: '',
    isAuthenticated: false,
    role: '',
    name: '',
  };
}

// Helper function to get user by username
export function getAdminUser(username: string): AdminCredentials | undefined {
  return ADMIN_USERS.find(u => u.username === username);
}

// Get all admin users (for super admin management)
export function getAllAdminUsers(): Omit<AdminCredentials, 'password'>[] {
  return ADMIN_USERS.map(({ password, ...user }) => user);
}
