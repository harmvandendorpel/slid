import $ from 'jquery';
import { findIndex } from 'lodash';

import script from './const/script';
import SlideTypes from './const/slide-types';
import state from './state';
import FlashScreen from './screens/flash';

class App {
  screenFactory(screenData, $parent) {
    switch (screenData.type) {
      case SlideTypes.FLASH:
        return new FlashScreen(screenData, $parent);

      default:
    }
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
    $(window)
      .bind('mousedown', () => {
        this.nextScreen();
      })
      .bind('keyup', (e) => {
        switch (e.which) {
          case 37:
            this.previousScreen();
            break;
          case 39:
            this.nextScreen();
            break;
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
