import { Webappsopdracht2017Page } from './app.po';

describe('webappsopdracht2017 App', function() {
  let page: Webappsopdracht2017Page;

  beforeEach(() => {
    page = new Webappsopdracht2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
