import EventEmitter from 'events';
import $ from 'jquery';
import SoundPlayer from '../sound';

const FADE_DURATION = 2000;

export default class Screen extends EventEmitter {
  constructor(screenData, $parent) {
    super();

    this.screenData = screenData;
    this.$parent = $parent;

    if (this.screenData.sound) {
      this.soundPlayer = new SoundPlayer(this.screenData.sound);
    }

    this.$screen = $('<div></div>').addClass('screen');
    this.$parent.append(this.$screen);
    setTimeout(() => {
      this.show();
    }, 100);
  }

  show() {
    this.$screen.css({
      opacity: 1
    });
  }

  hide() {
    this.$screen.css({
      opacity: 0
    });
  }

  kill() {
    setTimeout(() => {
      this.$screen.remove();
      this.emit('SCREEN_REMOVED', this.screenData);
    }, FADE_DURATION);
  }

  destroy() {
    if (this.commitSuicide) return;
    this.commitSuicide = true;
    this.hide();

    if (this.soundPlayer) {
      this.soundPlayer.destroy(() => this.kill());
    } else {
      this.kill();
    }
  }
}

