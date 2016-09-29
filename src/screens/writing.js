import sha1 from 'sha1';
import $ from 'jquery';
import Screen from './abstract';

const url = 'http://corenlp.run/?properties=%7B%22annotators%22%3A%20%22tokenize%2Cssplit%2Cpos%22%2C%20%22date%22%3A%20%222016-09-18T17%3A11%3A41%22%2C%20%22coref.md.type%22%3A%20%22dep%22%2C%20%22coref.mode%22%3A%20%22statistical%22%7D';
const LOCALSTORAGE_ID = 'NLPCACHE';

const CLASS_MAPPING = {
  ',': 'comma',
  '.': 'dot',
  NN: 'NN',
  VB: 'VB',
  VBP: 'VBP',
  NNS: 'NNS',
  MD: 'MD',
  IN: 'IN'
};

export default class WritingScreen extends Screen {
  constructor(screenData, $parent) {
    super(screenData, $parent);
    this.$result = $('<div></div>').addClass('result');
    this.$stage = $('<div></div>').addClass('stage');
    this.$stage.append(this.$result);
    this.$screen.append(this.$stage);

    this.cache = localStorage.getItem(LOCALSTORAGE_ID) ?
      JSON.parse(localStorage.getItem(LOCALSTORAGE_ID)) : {};

    this.text = screenData.text;

    this.tokenIndex = 0;
    this.getData(this.text).then((result) => {
      this.result = result;

      this.redraw();
    });
  }

  getData(text) {
    const hash = sha1(text);
    return new Promise((resolve) => {
      if (this.cache[hash]) {
        resolve(this.cache[hash]);
      } else {
        $.post(url, text, (response) => {
          this.cache[hash] = response;
          localStorage.setItem(LOCALSTORAGE_ID, JSON.stringify(this.cache));
          resolve(response);
        });
      }
    });
  }

  decideClass(pos) {
    const mapping = CLASS_MAPPING[pos] || pos;
    return `class-${mapping}`;
  }

  displayToken(token) {
    const $word = $('<span></span>')
      .text(token.originalText)
      .addClass('token')
      .addClass(this.decideClass(token.pos));

    this.$result.append($word);
    setTimeout(() => $word.addClass('show'), 50);
    if (token.after === ' ') {
      $word.addClass('space');
    }
  }

  wait() {
    const token = this.tokens[this.tokenIndex];
    const text = token.originalText;
    let duration = null;

    switch (text) {
      case ',':
        duration = 2000;
        break;

      case '.':
        duration = 3000;
        break;

      default:
        duration = text.length * 150 + 200;
    }

    this.displayToken(token);
    this.tokenIndex++;

    this.lastTimeoutId = setTimeout(() => {
      this.lastTimeoutId = null;
      if (this.tokenIndex < this.tokens.length) {
        this.wait();
      }
    }, duration);
  }

  redraw() {
    this.tokens = [];
    this.result.sentences.forEach((sentence) => {
      sentence.tokens.forEach(token => this.tokens.push(token));
    });

    setTimeout(() => {
      this.wait();
    }, 5000);
  }

  destroy() {
    super.destroy();
    if (this.lastTimeoutId) {
      clearTimeout(this.lastTimeoutId);
    }
  }
}
