import { SapPage } from './app.po';

describe('sap App', function() {
  let page: SapPage;

  beforeEach(() => {
    page = new SapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
