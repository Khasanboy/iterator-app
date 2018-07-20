import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message', () => {
    page.navigateToHome();
    expect(page.geth4Text()).toEqual('This is a place where everything starts');
  });

  it('should display message', () => {
    page.navigateToHome();
    expect(page.geth6Text()).toEqual('Take a journey');
  });

  it('should display clickMe button', () => {
    page.navigateToHome();
    expect(page.getClickMeButtonText()).toEqual('Click me');
  });

  it('should display text in final route', () => {
    page.navigateToFinal();
    expect(page.geth4Text()).toEqual('You are redirected here. Enjoy your time))');
  });

});
