import * as User from '@/models/user.model';

export function find() {
  const users = User.find();
  return users;
}
