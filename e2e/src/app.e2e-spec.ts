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
    var roomlink = element(by.linkText('Enter room (that has 100 magical lights)'));

    roomlink.click().then(function () {
      expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/room');
    });
  });

  it('should show lights Grid', () => {
    browser.get('http://localhost:4200/room');

    var personNumber = element(by.name('personNumber'));
    var bulbCount = element(by.name('bulbCount'));

    personNumber.sendKeys(2);
    personNumber.sendKeys(100);
    //Yay
  });
});
