import $ from 'jquery';
import { findIndex } from 'lodash';

import script from './const/script';
import SlideTypes from './const/slide-types';
import state from './state';
import FlashScreen from './screens/flash';
import ImageScreen from './screens/image';
import IFrameScreen from './screens/iframe';
import WritingScreen from './screens/writing';

class App {
  static screenFactory(screenData, $parent) {
    let ScreenClass = null;
    switch (screenData.type) {
      case SlideTypes.FLASH:
        ScreenClass = FlashScreen;
        break;

      case SlideTypes.IMAGE:
        ScreenClass = ImageScreen;
        break;

      case SlideTypes.IFRAME:
        ScreenClass = IFrameScreen;
        break;

      case SlideTypes.TEXT:
        ScreenClass = WritingScreen;
        break;

      default:
    }
    return new ScreenClass(screenData, $parent);
  }

  removeScreenFromState(screenIndex) {
    const indexToDelete = findIndex(state.screens, (screen) =>
      screen.screenData.index === screenIndex
    );

    state.screens.splice(indexToDelete, 1);
  }

  createCurrentScreen() {
    console.log('create screen');
    this.hideOldScreens();
    const currentScreenData = script[state.index];
    const newScreen = App.screenFactory(currentScreenData, this.$node);

    newScreen.on('SCREEN_REMOVED', data =>
      this.removeScreenFromState(data.index)
    );

    newScreen.on('REQUEST_NEXT_SCREEN', () =>
      this.nextScreen()
    );

    newScreen.on('REQUEST_PREVIOUS_SCREEN', () =>
      this.previousScreen()
    );

    this.preventContextMenu();
    state.screens.push(newScreen);
  }

  hideOldScreens() {
    state.screens.forEach((screen) => {
      screen.destroy();
    });
  }

  nextScreen() {
    if (state.index === script.length - 1) return;
    state.index++;
    this.createCurrentScreen();
  }

  previousScreen() {
    if (state.index === 0) return;
    state.index--;
    this.createCurrentScreen();
  }

  preventContextMenu() {
    $(window).bind('contextmenu', e => {
      e.preventDefault();
    });
  }

  initInputEvents() {
    $(window)
      .bind('mousedown', (e) => {
        e.preventDefault();
        switch (e.which) {
          case 3:
            this.nextScreen();
            break;

          case 1:
            this.previousScreen();
            break;

          default:
        }
        return false;
      })
      .bind('keyup', (e) => {
        console.log(e.which);
        switch (e.which) {
          case 78: // key 'n'
            this.createCurrentScreen();
            break;

          case 84:
            this.startTime = new Date();
            break;

          case 37:
            this.previousScreen();
            break;
          case 39:
            this.nextScreen();
            break;

          default:
        }
      })
      .bind('keydown', (e) => {
        switch (e.which) {
          case 82:
            e.preventDefault();
            return false;

          default:
        }
      });
  }

  formatTime(timeDiff) {
    timeDiff /= 1000;
    const seconds = this.pad(Math.round(timeDiff % 60), 2);
    timeDiff = Math.floor(timeDiff / 60);
    const minutes = this.pad(Math.round(timeDiff % 60), 2);
    return `${minutes}:${seconds}`;
  }

  moreInfo(i) {
    const currentScreenData = script[i];
    switch (currentScreenData.type) {
      case SlideTypes.TEXT:
        return currentScreenData.text.substring(0, 32);

      case SlideTypes.IFRAME:
        return currentScreenData.url;

      case SlideTypes.IMAGE:
      case SlideTypes.FLASH:
        return currentScreenData.file;

    }
  }

  updateTimer() {
    const endTime = new Date();
    const timeDiff = endTime - this.startTime;

    let moreInfo = this.moreInfo(state.index);

    if (state.index + 1 < script.length) {
      moreInfo += ` | ${this.moreInfo(state.index + 1)}`;
    }

    const completed = this.formatTime(
      (script.length / (state.index + 1)) *
      (endTime - this.startTime)
    );

    this.$timer.text(`${this.formatTime(timeDiff)} | ${state.index + 1}/${script.length} | ${moreInfo} | ${completed}`);
  }

  pad(num, size) {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }

  constructor($node) {
    this.$node = $node;
    const $dictionary = $('<div></div>').addClass('dictionary');
    $('body').append($dictionary);

    this.createCurrentScreen();

    this.startTime = new Date();
    this.$timer = $('<div></div>').addClass('timer');
    $('body').append(this.$timer);
    setInterval(() => this.updateTimer(), 1000);
    this.initInputEvents();
  }
}

const app = new App($('body'));
