import { browser, element, by } from 'protractor';

export class BlogDemosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pdm-root h1')).getText();
  }
}
