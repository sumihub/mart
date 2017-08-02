import { RedmartPage } from './app.po';

describe('redmart App', () => {
  let page: RedmartPage;

  beforeEach(() => {
    page = new RedmartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
