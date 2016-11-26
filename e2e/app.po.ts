import { browser, element, by } from 'protractor';

export class TaskPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tt-root h1')).getText();
  }
}
