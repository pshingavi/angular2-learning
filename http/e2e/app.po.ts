import { browser, element, by } from 'protractor';

export class HttpPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('https-root h1')).getText();
  }
}
