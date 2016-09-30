import $ from 'jquery';
import Screen from './abstract';

export default class IFrameScreen extends Screen {
  createNavigation() {
    this.$navigationButtons = $('<div></div>').addClass('navigation-buttons');
    this.$screen.append(this.$navigationButtons);

    this.$navigationButtons.bind('mousedown', (e) => {
      this.$overlay.toggle();
      this.$navigationButtons.toggleClass('active');
      e.preventDefault();
      return false;
    });
  }

  makeScreen() {
    const $iframe = $('<iframe></iframe>');
    this.$overlay = $('<div></div>').addClass('overlay');
    const src = this.screenData.url;
    $iframe.attr({ src });
    this.$screen.append($iframe);
    this.$screen.append(this.$overlay);
    this.createNavigation();
  }

  constructor(screenData, $parent) {
    super(screenData, $parent);

    setTimeout(() => this.makeScreen(), 200);
  }

  destroy() {
    super.destroy();
  }
}

