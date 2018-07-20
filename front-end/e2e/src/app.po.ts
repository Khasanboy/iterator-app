import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToHome() {
    return browser.get('/');
  }

  checkNavigation() {
    return browser.getCurrentUrl();
  }

  navigateToFinal() {
    return browser.get('/search/12');
  }

  geth4Text() {
    return element(by.css('app-root h4')).getText();
  }

  geth6Text() {
    return element(by.css('app-root h6')).getText();
  }

  getClickMeButtonText() {
    return element(by.css('app-root button')).getText();
  }

  getClickMeButton() {
    return element(by.css('app-root button'));
  }

  getOverlaySpan() {
    return element(by.css('app-root span'));
  }
}
