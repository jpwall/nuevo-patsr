import { PatsrPage } from './app.po';

describe('patsr App', () => {
  let page: PatsrPage;

  beforeEach(() => {
    page = new PatsrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
