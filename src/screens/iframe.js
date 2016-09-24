import $ from 'jquery';
import Screen from './abstract';

export default class IFrameScreen extends Screen {
  createNavigation() {
    this.$navigationButtons = $('<div></div>').addClass('navigation-buttons');
    this.$screen.append(this.$navigationButtons);
  }

  constructor(screenData, $parent) {
    super(screenData, $parent);
    const src = screenData.url;
    setTimeout(() => {
      const $iframe = $('<iframe></iframe>');
      $iframe.attr({ src });
      this.createNavigation();
      this.$screen.append($iframe);
    }, 100);
  }

  destroy() {
    super.destroy();
  }
}

