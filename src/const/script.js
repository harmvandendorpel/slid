import SlideTypes from './slide-types';

const script = [
  { type: SlideTypes.TEXT, text: 'It\'s the same brain. It\'s alive. It\'s undamaged.' },
  { type: SlideTypes.TEXT, text: 'In fact, it\'s completely untouched. We have not even opened the inner membranes.' },
  { type: SlideTypes.TEXT, text: 'The big difference, of course, would be that we\'ve severed every single nerve that leads into it and this means that your thinking would no longer be influenced by your senses.' },
  { type: SlideTypes.TEXT, text: 'You\'d be living in an extraordinarily pure and detached world.' },
  { type: SlideTypes.TEXT, text: 'Nothing to bother you at all, not even pain. You could not possibly feel pain because there would not be any nerves to feel it with.' },
  { type: SlideTypes.TEXT, text: 'In a way, it would be an almost perfect situation. No worries or fears or pains or hunger or thirst.' },
  { type: SlideTypes.TEXT, text: 'Not even any desires. Just your memories and your thoughts.' },
  { file: 'img/a.jpg', type: SlideTypes.IMAGE },
  { file: 'img/b.jpg', type: SlideTypes.IMAGE },
  { file: 'img/a.png', type: SlideTypes.IMAGE },
  { url: 'http://death.imitates.org/', type: SlideTypes.IFRAME },
  { file: 'img/b.png', type: SlideTypes.IMAGE },
  { file: 'swf/drostescrolls.swf', type: SlideTypes.FLASH },
  { file: 'img/d.jpg', type: SlideTypes.IMAGE },
  { file: 'swf/dibbets.swf', type: SlideTypes.FLASH },
  { file: 'img/c.jpg', type: SlideTypes.IMAGE },
  { file: 'swf/highway.swf', type: SlideTypes.FLASH },
  { file: 'swf/whiterectangle.swf', type: SlideTypes.FLASH },
];

script.forEach((element, index) => {
  element.index = index;
});

export default script;
