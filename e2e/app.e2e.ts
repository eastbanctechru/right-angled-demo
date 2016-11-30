describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'right-angled - lightweight building kit for angular2 data grids';
    expect(subject).toEqual(result);
  });

});
