import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 12);

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@chargedup.com' },
    update: {},
    create: {
      email: 'admin@chargedup.com',
      name: 'System Administrator',
      password: adminPassword,
      role: 'ADMIN',
      credits: 1000,
      isActive: true,
    },
  });

  console.log('✅ Admin user created:', adminUser.email);

  // Create sample regular user
  const userPassword = await bcrypt.hash('user123', 12);

  const regularUser = await prisma.user.upsert({
    where: { email: 'user@chargedup.com' },
    update: {},
    create: {
      email: 'user@chargedup.com',
      name: 'Demo User',
      password: userPassword,
      role: 'USER',
      credits: 50,
      isActive: true,
    },
  });

  console.log('✅ Demo user created:', regularUser.email);

  // Create sample chat
  const sampleChat = await prisma.chat.create({
    data: {
      title: 'Welcome to ChargedUp AI',
      userId: regularUser.id,
      messages: {
        create: [
          {
            content: "Hello! I'm excited to try out the AI features.",
            role: 'USER',
          },
          {
            content:
              "Welcome to ChargedUp AI! I'm here to help you with marketing strategies, content creation, and business insights. What would you like to explore today?",
            role: 'ASSISTANT',
          },
        ],
      },
    },
  });

  console.log('✅ Sample chat created:', sampleChat.title);

  console.log('🎉 Database seeding completed successfully!');
  console.log('\n📋 Default Login Credentials:');
  console.log('Admin: admin@chargedup.com / admin123');
  console.log('User: user@chargedup.com / user123');
  console.log('\n⚠️  Remember to change these passwords after first login!');
}

main()
  .catch(e => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
