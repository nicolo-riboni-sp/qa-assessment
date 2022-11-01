const { makeAxiosRequestWithExpectedStatus } = require('../../utilities/common');

describe('GIVEN invalid user id', () => {
  const userId = 'notAValidId';
  const topup = 5;

  describe('WHEN I update a user Balance', () => {
    const expectedStatus = 500;
    const requestParams = {
      url: `http://localhost:8080/api/users/${userId}`,
      method: 'PUT',
      data: {
        topup,
      },
    };
    let updateUserBalance;
    beforeAll(async () => {
      updateUserBalance = await makeAxiosRequestWithExpectedStatus(requestParams, expectedStatus);
    });

    it('THEN a specific error message will be sent as a response', () => {
      expect(typeof updateUserBalance.data).toBe('object');
      expect(typeof updateUserBalance.data.message).toBe('string');
      expect(updateUserBalance.data.message).toBe('Error retrieving User with id=notAValidId');
    });
  });
});

describe('GIVEN valid data for a user', () => {
  const userId = 2;
  const topup = 1;

  describe('WHEN I update a user Balance', () => {
    const expectedStatus = 201; // This is going to throw an error due to a problem with the API.
    const requestParams = {
      url: `http://localhost:8080/api/users/${userId}`,
      method: 'PUT',
      data: {
        topup,
      },
    };
    let updateUserBalance;
    beforeAll(async () => {
      updateUserBalance = await makeAxiosRequestWithExpectedStatus(requestParams, expectedStatus);
    });

    it('THEN the updated user is returned in the response', () => {
      expect(typeof updateUserBalance.data.message).toBe('string');
      // This test will not pass because there are multiple problems with this API both with the userId and with the management of the top up
      expect(updateUserBalance.data.message).toBe('User was updated successfully.');
    });
  });
});
