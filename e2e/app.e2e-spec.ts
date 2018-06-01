import { AppPage } from './app.po';
import { browser, $, $$, element, by } from 'protractor';

describe('grid App', () => {
  let page: AppPage;
  const searchInput = $('#mat-input-0');
  const filterButton = element(by.partialButtonText('filter_list'));
  const checkAll = $$('.mat-checkbox-inner-container');

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.sleep(2000);
    // filterButton.click();
    // browser.sleep(2000);
    searchInput.sendKeys('lorem');
    browser.sleep(2000);
    checkAll.click();
    browser.sleep(2000);
    expect(true);
  });
});
