import { GPagesPage } from './app.po';

describe('g-pages App', function() {
  let page: GPagesPage;

  beforeEach(() => {
    page = new GPagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
