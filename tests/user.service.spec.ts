import { find } from '@/services/user.service';
import { fetchUsers } from '@/models/user.model';
import { User } from '@/interfaces/user.interface';
jest.mock('@/models/user.model');
describe('Create User', () => {
  test('it should return new created user with status 200', () => {
    const users: User = {
      firstName: 'Sajid',
      lastName: 'Ansari',
      email: 'sajidansari33272@gmail.com',
      password: '123344',
      updateAt: new Date(),
      createdAt: new Date()
    };
    (fetchUsers as jest.MockedFunction<typeof fetchUsers>).mockReturnValue(
      users
    );
    const result = find();

    expect(result).toStrictEqual(users);
  });
});
