import SlideTypes from './slide-types';

const script = [
  { type: SlideTypes.TEXT, text: 'It\'s the same brain. It\'s alive. It\'s undamaged. In fact, it\'s completely untouched. We haven\'t even opened the dura. The big difference, of course, would be that we\'ve severed every single nerve that leads into it - except for the one optic nerve - and this means that your thinking would no longer be influenced by your senses.' },
  { type: SlideTypes.TEXT, text: 'You\'d be living in an extraordinarily pure and detached world. Nothing to bother you at all, not even pain. You couldn\'t possibly feel pain because there wouldn\'t be any nerves to feel it with. In a way, it would be an almost perfect situation. No worries or fears or pains or hunger or thirst. Not even any desires. Just your memories and your thoughts.' },
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
