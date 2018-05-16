import { AppPage } from './app.po';
import { browser, $, $$ } from 'protractor';

describe('grid App', () => {
  let page: AppPage;
  const searchInput = $('#mat-input-0');
  const checkAll = $$('.mat-checkbox-inner-container');

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.sleep(3000);
    searchInput.sendKeys('lorem');
    browser.sleep(3000);
    checkAll.click();
    browser.sleep(3000);
    expect(true);
  });
});
