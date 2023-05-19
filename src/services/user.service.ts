import { fetchUsers } from '@/models/user.model';

export function find() {
  const users = fetchUsers();
  return users;
}
