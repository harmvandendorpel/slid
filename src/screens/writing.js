import sha1 from 'sha1';
import pluralize from 'pluralize';
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
  IN: 'IN',
  '``': 'QUOTE',
  '\'\'': 'QUOTE'
};

export default class WritingScreen extends Screen {
  constructor(screenData, $parent) {
    super(screenData, $parent);
    this.$result = $('<div></div>').addClass('result');
    this.$stage = $('<div></div>').addClass('stage');
    this.$dictionary = $('.dictionary');
    this.$dictionary.addClass('dictionary-show');
    this.$stage.append(this.$result);
    this.$screen.append(this.$stage);

    this.cache = localStorage.getItem(LOCALSTORAGE_ID) ?
      JSON.parse(localStorage.getItem(LOCALSTORAGE_ID)) : {};

    this.text = screenData.text;

    this.tokenIndex = 0;

    window.dictionary = window.dictionary || [];

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

  findDictionaryItem(word) {
    return window.dictionary.find(item => item.text === word);
  }

  addToDictionary(word) {
    const singularLowercaseWord = pluralize(word.toLowerCase(), 1);
    const dictionaryItem = this.findDictionaryItem(singularLowercaseWord);
    if (dictionaryItem === undefined) {
      window.dictionary.push({
        text: singularLowercaseWord,
        count: 1
      });
    } else {
      dictionaryItem.count++;
    }
    window.dictionary.sort((a, b) => a.count > b.count);
  }

  displayToken(token) {
    const $word = $('<span></span>')
      .text(token.originalText)
      .addClass('token')
      .addClass(this.decideClass(token.pos));

    switch (token.pos) {
      case 'NN':
      case 'NNS':
        this.addToDictionary(token.originalText);
        break;

      default:
    }

    this.$result.append($word);
    if (token.after === ' ') {
      $word.addClass('space');
    }

    setTimeout(() => {
      $word.addClass('show');
      this.updateDictionary();
    }, 50);
  }

  updateDictionary() {
    const selection = window.dictionary.slice(-5);
    this.$dictionary.html('');

    selection.forEach((word) => {
      const $token = $('<div></div>').addClass('dictionary-token');
      if (word.count > 1) {
        $token.text(`${word.text} (${word.count})`);
      } else {
        $token.text(`${word.text}`);
      }
      this.$dictionary.append($token);
    });
  }

  wait() {
    const token = this.tokens[this.tokenIndex];
    let duration = null;

    switch (token.originalText) {
      case ',':
        duration = 2000;
        break;

      case '.':
        duration = 3000;
        // token.originalText = '⬚';
        break;

      default:
        duration = token.originalText.length * 125 + 200;
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

    console.log(this.text);
    setTimeout(() => {
      this.wait();
    }, 5000);
  }

  destroy() {
    super.destroy();
    this.$dictionary.removeClass('dictionary-show');
    if (this.lastTimeoutId) {
      clearTimeout(this.lastTimeoutId);
    }
  }
}
