import sha1 from 'sha1';
import $ from 'jquery';
import Screen from './abstract';
const url = 'http://corenlp.run/?properties=%7B%22annotators%22%3A%20%22tokenize%2Cssplit%2Cpos%22%2C%20%22date%22%3A%20%222016-09-18T17%3A11%3A41%22%2C%20%22coref.md.type%22%3A%20%22dep%22%2C%20%22coref.mode%22%3A%20%22statistical%22%7D';
const DEFAULT_SENTENCE = 'It\'s the same brain. It\'s alive. It\'s undamaged. In fact, it\'s completely untouched. We haven\'t even opened the dura. The big difference, of course, would be that we\'ve severed every single nerve that leads into it - except for the one optic nerve - and this means that your thinking would no longer be influenced by your senses. You\'d be living in an extraordinarily pure and detached world. Nothing to bother you at all, not even pain. You couldn\'t possibly feel pain because there wouldn\'t be any nerves to feel it with. In a way, it would be an almost perfect situation. No worries or fears or pains or hunger or thirst. Not even any desires. Just your memories and your thoughts. ';

export default class WritingScreen extends Screen {
  constructor(screenData, $parent) {
    super(screenData, $parent);
    this.$result = $('<div></div>').addClass('result');
    this.$stage = $('<div></div>').addClass('stage');
    this.$stage.append(this.$result);
    this.$screen.append(this.$stage);

    this.cache = localStorage.getItem('NLPCACHE') ?
      JSON.parse(localStorage.getItem('NLPCACHE')) : {};
    console.log(this.cache);
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
    this.getData(DEFAULT_SENTENCE, (result) => this.displayResult(result));
  }
}
