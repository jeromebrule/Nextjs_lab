import { createMocks } from 'node-mocks-http'
import { GET, POST } from './route'
import prisma from "@/prisma/client";

describe('GET function', () => {
  it('should return an array of users', async () => {
    // Mock prisma.contact.findMany to return a sample array of users
    const mockUsers = [
      { id: 1, name: 'User1' },
      { id: 2, name: 'User2' },
    ];
    prisma.contact.findMany.mockResolvedValue(mockUsers);

    // Create a mock NextRequest
    const { req, res } = createMocks({
      method: 'GET',
    });

    // Call the GET function with the mock request
    await GET(req);

    // Check if prisma.contact.findMany was called with the expected arguments
    expect(prisma.contact.findMany).toHaveBeenCalledWith({});

    // Check if the response is as expected
    expect(res._getJSONData()).toEqual(mockUsers);
  });
});
