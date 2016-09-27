import { WebAppNg2Page } from './app.po';

describe('web-app-ng2 App', function() {
  let page: WebAppNg2Page;

  beforeEach(() => {
    page = new WebAppNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
