import { User } from '@/interfaces/user.interface';

export function find() {
  const users: User = {
    firstName: 'Sajid',
    lastName: 'Ansari',
    email: 'sajidansari33272@gmail.com',
    password: '123344',
    updateAt: new Date(),
    createdAt: new Date()
  };
  return users;
}
