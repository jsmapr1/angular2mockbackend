import { MockbackendTestPage } from './app.po';

describe('mockbackend-test App', function() {
  let page: MockbackendTestPage;

  beforeEach(() => {
    page = new MockbackendTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
