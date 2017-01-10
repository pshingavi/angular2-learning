import { MaterialDoPage } from './app.po';

describe('material-do App', function() {
  let page: MaterialDoPage;

  beforeEach(() => {
    page = new MaterialDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
