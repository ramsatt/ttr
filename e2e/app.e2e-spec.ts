import { ArtmcmPage } from './app.po';

describe('artmcm App', function() {
  let page: ArtmcmPage;

  beforeEach(() => {
    page = new ArtmcmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
