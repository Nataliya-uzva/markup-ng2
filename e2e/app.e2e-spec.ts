import { MarkupNg2Page } from './app.po';

describe('markup-ng2 App', function() {
  let page: MarkupNg2Page;

  beforeEach(() => {
    page = new MarkupNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
