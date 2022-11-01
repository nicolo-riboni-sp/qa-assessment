describe('GIVEN valid balance for a user', () => {
  const topup = '1000';

  describe('GIVEN that I can increase the user balance', () => {
    const updateUserBlanceUrl = 'http://127.0.0.1:8081/users/2';

    beforeAll(async () => {
      await page.goto(updateUserBlanceUrl);

      // enter balance
      await page.waitForSelector('#topup', { visible: true });
      const fieldTopup = await page.$('#topup');
      await fieldTopup.click({ clickCount: 3 });
      await fieldTopup.type(topup);

      // click add balance
      await page.waitForSelector('#updateBalance', { visible: true });
      await page.click('#updateBalance');
    });

    it('THEN I can see the success message', async () => {
      // This is going to fail because no success message is shown to the user, this is a big UX problem
      const isSuccessMessageVisible = await page.waitForSelector('#successMessage', { visible: true });
      expect(isSuccessMessageVisible).toBeTruthy();
    });
  });
});
