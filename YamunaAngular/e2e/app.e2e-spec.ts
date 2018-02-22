import { YamunaAngularPage } from './app.po';

describe('yamuna-angular App', () => {
  let page: YamunaAngularPage;

  beforeEach(() => {
    page = new YamunaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
