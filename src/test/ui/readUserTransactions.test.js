describe('GIVEN that I can see a users transactions', () => {
  const usersURL = 'http://127.0.0.1:8081/users';
  let userOneTransactions;
  let userTwoTransactions;

  // This whole test could have been written in a better way. Currently it's giving for granted that there always be at least two users
  beforeAll(async () => {
    await page.goto(usersURL);

    // Get the transactions from the first user
    await page.waitForSelector('#user-1', { visible: true });
    const userOne = await page.$('#user-1');
    await userOne.click();
    await page.waitForSelector('#transactionList', { visible: true });
    const elementOne = await page.$('#transactionList');
    userOneTransactions = await page.evaluate((el) => el.textContent, elementOne);

    // Get the transactions from the second user
    await page.waitForSelector('#user-1', { visible: true });
    const userTwo = await page.$('#user-1');
    await userTwo.click();
    await page.waitForSelector('#transactionList', { visible: true });
    const elementTwo = await page.$('#transactionList');
    userTwoTransactions = await page.evaluate((el) => el.textContent, elementTwo);
  });

  it('THEN I can see the different transactions', async () => {
    expect(userOneTransactions).not.toEqual(userTwoTransactions);
  });
});
