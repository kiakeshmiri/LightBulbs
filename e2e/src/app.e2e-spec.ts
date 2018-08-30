import { AppPage } from './app.po';
import { by, element, browser, WebDriver } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to LightBulbs Room!');
  });


  it('should navigate to room', () => {
    const roomlink = element(by.linkText('Enter light room'));

    roomlink.click().then(function () {
      expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/room');
    });
  });

  it('should turn on lights', () => {
    browser.get('http://localhost:4200/room');

    const personNumber = element(by.name('personNumber'));
    const bulbCount = element.all(by.css('mat-chip p'));

    personNumber.sendKeys(2);
    browser.sleep(2500);
    bulbCount.getText().then(function (text) {
        expect(text.toString()).toBe('10 light(s) are ON');
    });
  });
});
