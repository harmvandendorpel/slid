import SlideTypes from './slide-types';

const script = [
  { file: 'swf/drostescrolls.swf', type: SlideTypes.FLASH },
  { file: 'swf/dibbets.swf', type: SlideTypes.FLASH },
  { file: 'swf/highway.swf', type: SlideTypes.FLASH },
  { file: 'swf/whiterectangle.swf', type: SlideTypes.FLASH },
];

script.forEach((element, index) => {
  element.index = index;
});

export default script;
