import { Angular2HelloworldPage } from './app.po';

describe('angular2-helloworld App', function() {
  let page: Angular2HelloworldPage;

  beforeEach(() => {
    page = new Angular2HelloworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
