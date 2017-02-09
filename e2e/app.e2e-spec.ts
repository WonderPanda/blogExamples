import { BlogDemosPage } from './app.po';

describe('blog-demos App', function() {
  let page: BlogDemosPage;

  beforeEach(() => {
    page = new BlogDemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pdm works!');
  });
});
