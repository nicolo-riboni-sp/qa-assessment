const { makeAxiosRequestWithExpectedStatus } = require('../../utilities/common');

describe('WHEN I retrive all the users', () => {
  const expectedStatus = 200;
  const requestParams = {
    url: 'http://localhost:8080/api/users',
    method: 'GET',
  };
  let retriveAllUsersResponse;
  beforeAll(async () => {
    retriveAllUsersResponse = await makeAxiosRequestWithExpectedStatus(requestParams, expectedStatus);
  });

  it('THEN the users in the database are returned', () => {
    expect(typeof retriveAllUsersResponse.data).toBe('object');
    expect(retriveAllUsersResponse.data.length).toBeGreaterThan(0);
    expect(typeof retriveAllUsersResponse.data[0]).toBe('object');
    expect(typeof retriveAllUsersResponse.data[0].id).toBe('number');
    expect(retriveAllUsersResponse.data[0].id).toBe(1);
    expect(typeof retriveAllUsersResponse.data[0].name).toBe('string');
    expect(retriveAllUsersResponse.data[0].name).toBe('Marco');
    expect(typeof retriveAllUsersResponse.data[0].balance).toBe('number');
    expect(retriveAllUsersResponse.data[0].balance).toBe(800);
  });
});
