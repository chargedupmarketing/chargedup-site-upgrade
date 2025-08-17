# Admin Panel Access Guide

## Quick Access

The admin panel can be accessed through several methods:

### 1. Direct URL
- **Admin Login**: `/admin-login`
- **Admin Panel**: `/admin/newsletter` (after authentication)

### 2. Header Navigation
- **Desktop**: Look for the shield icon (🔐) in the top-right header
- **Mobile**: Open mobile menu and look for "🔐 Admin Panel" button

### 3. Footer (Hidden)
- Scroll to the bottom of any page
- Look for the small gear icon (⚙️) in the footer
- This is intentionally subtle for security

## Login Credentials

### Available Users:

| Username | Password | Role | Access Level |
|----------|----------|------|--------------|
| `superadmin` | `chargedup2024` | Super Admin | Full access to all features |
| `admin` | `admin2024` | Admin | Access to most features (no user management) |
| `employee` | `employee2024` | Employee | Limited access (strategy meetings, GoHighLevel) |

## Admin Panel Features

### Newsletter Management
- View all newsletter subscribers
- Create and manage email campaigns
- Export subscriber data to CSV
- **Access**: Admin & Super Admin only

### Strategy Meeting Inquiries
- View and respond to meeting requests
- Filter by status, priority, and source
- Add response notes and update status
- **Access**: All management levels

### GoHighLevel Integration
- Quick redirect to GoHighLevel platform
- Platform features overview
- Quick action links
- **Access**: All management levels

### User Management
- Manage admin users and permissions
- Create, edit, and delete users
- Control access levels
- **Access**: Super Admin only

### Analytics Dashboard
- Newsletter performance metrics
- Strategy meeting statistics
- Website analytics
- Revenue tracking
- **Access**: Admin & Super Admin only

### System Settings
- General system configuration
- Security settings
- Email and notification preferences
- Appearance customization
- **Access**: Super Admin only

## Security Notes

- All admin access is logged and monitored
- Unauthorized access attempts will be reported
- Session timeout: 1 hour
- Use strong passwords and keep credentials secure
- The admin panel is only accessible to authorized personnel

## Troubleshooting

### Login Issues
1. Ensure you're using the correct credentials
2. Check browser console for any error messages
3. Clear browser cache and cookies if needed
4. Use the "🧪 Test Auth System" button to verify authentication

### Loading Screen Issues
1. Clear browser localStorage: `localStorage.clear()`
2. Check if JavaScript is enabled
3. Ensure you're not blocking cookies
4. Try a different browser or incognito mode

### Access Denied
1. Verify your user role has the required permissions
2. Contact a Super Admin if you need elevated access
3. Check if your account is active

## Support

For technical issues or access problems, contact:
- **Email**: social@chargedupmarketing.com
- **Super Admin**: Use the superadmin account for urgent issues

---

**⚠️ Security Reminder**: This admin panel contains sensitive business information. Always log out when finished and never share your credentials.
