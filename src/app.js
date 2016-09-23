import $ from 'jquery';
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

  createCurrentScreen() {
    const newScreen = this.screenFactory(script[state.index], this.$node);

    newScreen.on('SCREEN_REMOVED', data =>
      console.log('screen removed', data)
    );

    state.screens.push(newScreen);
  }

  // function createIframe($screen) {
  //   const $iframe = $('<iframe></iframe>');
  //   $iframe.attr('src', 'http://dissociations.com/images/crystal_oracle.swf');
  //   $screen.append($iframe);
  //   $node.append($screen);
  // }


  constructor($node) {
    this.$node = $node;
    this.createCurrentScreen();
  }
}

const app = new App($('body'));
