import $ from 'jquery';
import { findIndex } from 'lodash';

import script from './const/script';
import SlideTypes from './const/slide-types';
import state from './state';
import FlashScreen from './screens/flash';
import ImageScreen from './screens/image';

class App {
  screenFactory(screenData, $parent) {
    let ScreenClass = null;
    switch (screenData.type) {
      case SlideTypes.FLASH:
        ScreenClass = FlashScreen;
        break;


      case SlideTypes.IMAGE:
        ScreenClass = ImageScreen;
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
    this.hideOldScreens();

    const newScreen = this.screenFactory(script[state.index], this.$node);

    newScreen.on('SCREEN_REMOVED', data => {
        console.log('screen removed');
        this.removeScreenFromState(data.index);
      }
    );

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

  initInputEvents() {
    $(window).bind('contextmenu', function(e) {
      console.log('ctx menu button:', e.which);
      e.preventDefault();
    });

    $(window)
      .bind('mousedown', (e) => {
        console.log('test');
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
        switch (e.which) {
          case 37:
            this.previousScreen();
            break;
          case 39:
            this.nextScreen();
            break;
          default:
        }
      });
  }

  constructor($node) {
    this.$node = $node;
    this.createCurrentScreen();

    this.initInputEvents();
  }
}

const app = new App($('body'));
