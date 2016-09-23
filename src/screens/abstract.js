import EventEmitter from 'events';
import $ from 'jquery';

const FADE_DURATION = 2000;

export default class Screen extends EventEmitter {
  constructor(screenData, $parent) {
    super();

    this.screenData = screenData;
    this.$parent = $parent;

    this.$screen = $('<div></div>').addClass('screen');
    this.$parent.append(this.$screen);
    console.log('set opacity');
    this.$screen.css({
      opacity: 1
    });
  }

  destroy() {
    this.$screen.css({
      opacity: 0
    });

    setTimeout(() => {
      this.$screen.remove();
      this.emit('SCREEN_REMOVED', this.screenData);
    }, FADE_DURATION);
  }
}

