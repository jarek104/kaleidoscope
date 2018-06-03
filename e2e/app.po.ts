import { browser, by, element, $, ElementFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class AppPage {
  searchInput = $('.protractor-search-input');
  filterButton = element(by.partialButtonText('filter_list'));
  checkAll = $('.protractor-checkbox-all');
  selectionMenu = $('app-selection-menu');
  selectedItemsLabel = $('.protractor-items-selected');
  exportButton = element(by.partialButtonText('get_app'));
  tableMenu = $('.protractor-table-menu');
  rowDensity = element(by.partialButtonText('reorder'));
  rowDensityHigh = element(by.partialButtonText('High'));
  thumbnailsViewer = $('.protractor-thumbnails-view');
  showOnlyFiltered = element(by.partialButtonText('filter_center_focus'));

  navigateTo() {
    // return browser.get('http://nokurna.com/kaleidoscope/');
    return browser.get('http://nokurna.com/kaleidoscope/');
  }
  waitForElementToBePresent(el: ElementFinder, errorMsg?: string) {
    const ec = protractor.ExpectedConditions;
    const cond = ec.presenceOf(el);
    return browser.wait(cond, 10000);
  }

  waitForElementToBeClickable(el: ElementFinder, errorMsg?: string) {
    const ex = protractor.ExpectedConditions;
    const cond = ex.elementToBeClickable(el);
    return browser.wait(cond, 10000, errorMsg);
  }
}
