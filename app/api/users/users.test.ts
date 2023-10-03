import 'isomorphic-fetch'
import { createMocks } from 'node-mocks-http'
import { GET, POST } from './route'
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

describe('GET function', () => {
  it('should return an array of users', async () => {
    const mockUsers = [
      { id: 1, userName: 'User1' },
      { id: 2, userName: 'User2' },
    ];
    prisma.contact.findMany.mockResolvedValue(mockUsers);

    const { req, res } = createMocks({
      method: 'GET',
    });

    await GET(req);

    expect(prisma.contact.findMany).toHaveBeenCalledWith({});

    expect(res._getJSONData()).toEqual(mockUsers);
  });
});
