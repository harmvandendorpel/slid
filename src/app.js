import $ from 'jquery';
import { findIndex } from 'lodash';

import script from './const/script';
import SlideTypes from './const/slide-types';
import state from './state';
import FlashScreen from './screens/flash';
import ImageScreen from './screens/image';
import IFrameScreen from './screens/iframe';

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

      case SlideTypes.IFRAME:
        ScreenClass = IFrameScreen;
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
      console.log('no menu');
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
