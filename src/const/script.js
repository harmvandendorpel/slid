import SlideTypes from './slide-types';

const script = [
  { file: 'img/a.jpg', type: SlideTypes.IMAGE },
  { file: 'img/b.jpg', type: SlideTypes.IMAGE },
  { file: 'img/a.png', type: SlideTypes.IMAGE },
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
