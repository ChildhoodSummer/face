import { FacePage } from './app.po';

describe('face App', () => {
  let page: FacePage;

  beforeEach(() => {
    page = new FacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
