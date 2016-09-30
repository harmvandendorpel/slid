import SlideTypes from './slide-types';

const script = [
  { file: 'swf/dibbets.swf', type: SlideTypes.FLASH },
  { type: SlideTypes.TEXT, text: 'She asked me, "how can you know you know something?"' },
  
  { url: '/autobreeder/demo.html', type: SlideTypes.IFRAME },
  { type: SlideTypes.TEXT, text: 'We\'re exploring.' },
  { url: '/turtles/', type: SlideTypes.IFRAME },
  { type: SlideTypes.TEXT, text: 'We\'re trying to find out as much as we can about the world.' },
  { type: SlideTypes.TEXT, text: 'People sometimes ask me: "are you looking for the ultimate truth?"' },
  { type: SlideTypes.TEXT, text: 'No, I\'m not.' },
  { file: 'swf/dibbets.swf', type: SlideTypes.FLASH },
  { type: SlideTypes.TEXT, text: 'I\'m just looking around me in order to find out more about the world.' },
  { type: SlideTypes.TEXT, text: 'And if it turns out that there is a simple ultimate law that explains everything, so be it.' },
  { type: SlideTypes.TEXT, text: 'That would be a very nice discovery.' },
  { type: SlideTypes.TEXT, text: 'But, if the truth turns out to be like an onion with millions of layers, then that\'s the way it is.' },
  
  { file: 'swf/drostescrolls.swf', type: SlideTypes.FLASH },
  { type: SlideTypes.TEXT, text: 'All people must rise, all people must fall. Nothing is lost but all are gone.' },
  { url: 'http://death.imitates.org/', type: SlideTypes.IFRAME },
  { type: SlideTypes.TEXT, text: 'When we break things down to their smallest parts, they will each seem dry as dust.' },
  { type: SlideTypes.TEXT, text: 'As if some fundamental essence has been lost.' },
  { type: SlideTypes.TEXT, text: 'Think of the classic brain in a vat Descartes spoke of.' },
  { type: SlideTypes.TEXT, text: 'Think of the way in which the brain experiences the world.' },
  { type: SlideTypes.TEXT, text: 'Creating something that already exists and presenting it as new is considered plagiarising.' },
  { type: SlideTypes.TEXT, text: 'Creating something that already exists and presenting it as old is considered kitsch.' },
  { file: 'swf/dibbets.swf', type: SlideTypes.FLASH },
  { type: SlideTypes.TEXT, text: 'It\'s the same brain. It\'s alive. It\'s undamaged.' },
  { type: SlideTypes.TEXT, text: 'In fact, it\'s completely untouched. We have not even opened the inner membranes.' },
  { type: SlideTypes.TEXT, text: 'The big difference would be that we have severed every single nerve that leads into it and this means that your thinking would no longer be influenced by your senses.' },
  { type: SlideTypes.TEXT, text: 'You\'d be living in an extraordinarily pure and detached world.' },
  { type: SlideTypes.TEXT, text: 'Nothing to bother you at all, not even pain. You could not possibly feel pain because there would not be any nerves to feel it with.' },
  { type: SlideTypes.TEXT, text: 'In a way, it would be an almost perfect situation. No worries or fears or pains or hunger or thirst.' },
  { type: SlideTypes.TEXT, text: 'Not even any desires. Just your memories and your thoughts.' },
  { file: 'img/a.jpg', type: SlideTypes.IMAGE },
  { file: 'img/b.jpg', type: SlideTypes.IMAGE },
  { file: 'img/a.png', type: SlideTypes.IMAGE },
  { url: 'http://death.imitates.org/', type: SlideTypes.IFRAME },
  { file: 'img/b.png', type: SlideTypes.IMAGE },
  
  { file: 'img/d.jpg', type: SlideTypes.IMAGE },
  { file: 'img/c.jpg', type: SlideTypes.IMAGE },
  { file: 'swf/highway.swf', type: SlideTypes.FLASH },
  { file: 'swf/whiterectangle.swf', type: SlideTypes.FLASH },
];

script.forEach((element, index) => {
  element.index = index;
});

export default script;
