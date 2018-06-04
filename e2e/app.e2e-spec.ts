import { AppPage } from './app.po';
import { browser, $, $$, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Kaleidoscope', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should do some clicking, navigation and searching ', async() => {
    await page.navigateTo();
    browser.sleep(1000);

    await page.checkAll.click();
    browser.sleep(1000);
    expect(await await page.selectedItemsLabel.getText()).toBe('100 items selected');
    browser.sleep(1000);
    await page.checkAll.click();
    browser.sleep(1000);
    await page.searchInput.sendKeys('art');
    browser.sleep(1000);
    await page.checkAll.click();
    browser.sleep(1000);
    expect(await page.selectedItemsLabel.getText()).toBe('10 items selected');
    await page.waitForElementToBeClickable(page.selectionMenu);
    await page.selectionMenu.click();
    browser.sleep(1000);
    await page.waitForElementToBeClickable(page.exportButton);
    await page.exportButton.click();
    browser.sleep(1000);
    await page.searchInput.clear();
    await page.searchInput.sendKeys(protractor.Key.ENTER);
    browser.sleep(1000);
    await page.waitForElementToBeClickable(page.tableMenu);
    await page.tableMenu.click();
    browser.sleep(1000);
    await page.waitForElementToBeClickable(page.rowDensity);
    await page.rowDensity.click();
    browser.sleep(1000);
    await page.waitForElementToBeClickable(page.rowDensityHigh);
    await page.rowDensityHigh.click();
    browser.sleep(1000);
    await page.thumbnailsViewer.click();
    browser.sleep(1000);
    await page.waitForElementToBeClickable(page.tableMenu);
    await page.tableMenu.click();
    browser.sleep(2000);
    await page.waitForElementToBeClickable(page.showOnlyFiltered);
    await page.showOnlyFiltered.click();
    browser.sleep(2000);
  });
});
