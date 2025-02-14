import theme from './theme';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme,
});

function waitForElement(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelectorAll(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelectorAll(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

// Register an addon that hides stories with STATUS = HIDDEN from the sidebar
addons.register('HIDE_STORIES_ADDON', () => {
  waitForElement('div[id="storybook-explorer-menu"] span[type="HIDDEN"]').then((elements) => {
    elements.forEach((element) => {
      const linkId = element.closest('a').getAttribute('id');
      var style = document.createElement('style');
      style.innerHTML = `div[id="storybook-explorer-menu"] a[id="${linkId}"] { display: none; }`;
      document.getElementsByTagName('head')[0].appendChild(style);
    });
  });
});
