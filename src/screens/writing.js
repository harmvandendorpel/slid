import sha1 from 'sha1';
import $ from 'jquery';
import Screen from './abstract';
const url = 'http://corenlp.run/?properties=%7B%22annotators%22%3A%20%22tokenize%2Cssplit%2Cpos%22%2C%20%22date%22%3A%20%222016-09-18T17%3A11%3A41%22%2C%20%22coref.md.type%22%3A%20%22dep%22%2C%20%22coref.mode%22%3A%20%22statistical%22%7D';

export default class WritingScreen extends Screen {
  constructor(screenData, $parent) {
    super(screenData, $parent);
    this.$result = $('<div></div>').addClass('result');
    this.$stage = $('<div></div>').addClass('stage');
    this.$stage.append(this.$result);
    this.$screen.append(this.$stage);

    this.cache = localStorage.getItem('NLPCACHE') ?
      JSON.parse(localStorage.getItem('NLPCACHE')) : {};

    this.text = screenData.text;
    this.updateText();
  }

  getData(text, callback) {
    const hash = sha1(text);
    if (this.cache[hash]) {
      callback(this.cache[hash]);
    } else {
      $.post(url, text, (response) => {
        this.cache[hash] = response;
        localStorage.setItem('NLPCACHE', JSON.stringify(this.cache));
        callback(response);
      });
    }
  }

  decideClass(pos) {
    return `class-${pos}`;
  }

  displaySentence(sentence) {
    sentence.tokens.forEach((token) => {
      if (token.before === '↵') {
        this.$result.append($('<br>'));
      }
      const $word = $('<span></span>')
        .text(token.originalText)
        .addClass(this.decideClass(token.pos));

      this.$result.append($word);
      if (token.after === ' ') {
        $word.addClass('space');
      }
    });
  }

  displayResult(result) {
    result.sentences.forEach((sentence) => {
      this.displaySentence(sentence);
    });
  }

  updateText() {
    this.getData(this.text, (result) => this.displayResult(result));
  }
}
