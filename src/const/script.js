import SlideTypes from './slide-types';

const script = [
  // intro
  { type: SlideTypes.TEXT, text: 'It\'s the same brain. It\'s alive. It\'s undamaged. In fact, it\'s completely untouched. We haven\'t even opened the dura. The big difference, of course, would be that we\'ve severed every single nerve that leads into it and this means that your thinking would no longer be influenced by your senses. You\'d be living in an extraordinarily pure and detached world. Nothing to bother you at all, not even pain. You couldn\'t possibly feel pain because there wouldn\'t be any nerves to feel it with. In a way, it would be an almost perfect situation. No worries or fears or pains or hunger or thirst. Not even any desires. Just your memories and your thoughts.' },
  { file: 'swf/dibbets.swf', type: SlideTypes.FLASH },
  // { type: SlideTypes.TEXT, text: 'I am an artist who programs.' },
  { type: SlideTypes.TEXT, text: 'software as a medium, not a technology' },
  { type: SlideTypes.TEXT, text: 'software as cultural production' },
  { type: SlideTypes.TEXT, text: 'computer programming as an artistic practice' },
  
  // then we can compare it to other means of cultural production
  //
  { type: SlideTypes.TEXT, text: 'software versus sculpture' },
  { type: SlideTypes.TEXT, text: 'software as sculpture' },
  // such as sculpture
  
  
  
  // { type: SlideTypes.TEXT, text: 'Besides that, I have probably put too many things into this presentation.' },

  // Hopelessly Profound
  // { file: 'swf/drostescrolls.swf', type: SlideTypes.FLASH },

  // Aesthetic dimension
  
  { type: SlideTypes.IMAGE, file: 'img/71382918.jpg' },
  // Static Monuments
  { type: SlideTypes.TEXT, text: 'Indestructible, immutable beacons in time.' },

  
  // Sculptural Logic
  // { type: SlideTypes.TEXT, text: 'Mutable versus Immutable.' },

  // Horizontality vs. verticality
  { type: SlideTypes.TEXT, text: 'While monuments were vertically erected, software is horizontally spread thin across the network.' },
  
  { type: SlideTypes.TEXT, text: 'software grows in iterations and is never complete.' }, // by an intuitive gesture or magical spell.' },
  
  { type: SlideTypes.TEXT, text: 'software is alive and seems to demand its own improvement' },
  { type: SlideTypes.TEXT, text: 'A slowly dying orphan, forsaken by its creator and eventually by its users :(' },
  { type: SlideTypes.TEXT, text: 'abandonware' },
  
  { type: SlideTypes.TEXT, text: 'change disintegrates sculpture' },
  { type: SlideTypes.TEXT, text: 'change consolidates software' },
  { type: SlideTypes.TEXT, text: 'unholy neoliberal ideology' },
  
  { type: SlideTypes.TEXT, text: 'I am going to show you a few projects about change and instability.' },
  
  // deli near info
  
  { type: SlideTypes.TEXT, text: 'Delinear info' },
  { type: SlideTypes.TEXT, text: '"a deli near info"' },
  
  { type: SlideTypes.TEXT, text: 'social media networks' },
  { type: SlideTypes.TEXT, text: 'linear timelines' },
  { type: SlideTypes.TEXT, text: 'The \'new\' is added on top. The \'old\' fades away into oblivion.' },
  { type: SlideTypes.TEXT, text: 'archive fever' },
  { url: 'http://delinear.info/75f69e9a9f', type: SlideTypes.IFRAME },
  { url: 'http://delinear.info/3a6ab37fce', type: SlideTypes.IFRAME },
  
  { type: SlideTypes.TEXT, text: 'Eventually, meaning emerges in the space between chunks of information. ' },
  
  { type: SlideTypes.TEXT, text: 'impossible to construct an encompassing overview' },
  { type: SlideTypes.TEXT, text: 'Heuristics for local decision taking' },
  { type: SlideTypes.TEXT, text: 'The traces of navigation constitute a narrative.' },
  { type: SlideTypes.IMAGE, file: 'img/ReleaseEarlyAbrons_08.jpg' },
  { type: SlideTypes.TEXT, text: 'anachronistic combinations' },
  { type: SlideTypes.TEXT, text: 'suspended hierarchy' },
  // Software
  
  // semiotics of natural language
  
  // words are defined by their relationship to other words
  
  // Death imitates Language
  
  // { url: 'video/strategies.html', type: SlideTypes.IFRAME },
  { type: SlideTypes.TEXT, text: 'Death imitates language.' },
  { type: SlideTypes.TEXT, text: 'genetic algorithm, kinship, evolution' },
  { type: SlideTypes.IMAGE, file: 'img/dil-04.png' },
  
  { type: SlideTypes.IMAGE, file: 'img/arp-squares.jpg' },
  { url: 'http://death.imitates.org/', type: SlideTypes.IFRAME },
  { url: '/autobreeder/demo.html', type: SlideTypes.IFRAME, sound: '/sound/a.wav' },

  // New and Different

  // { type: SlideTypes.TEXT, text: 'Creating something that already exists and presenting it as new is considered plagiarising.'},
  // { type: SlideTypes.TEXT, text: 'Creating something that already exists and presenting it as old is considered kitsch.'},

  // Cryogenics
  { type: SlideTypes.IMAGE, file: 'img/Cryonics_satellite_interior-larger.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/b.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/Shtonk-Vtejuwoh-Bonifac.jpg' },

  { type: SlideTypes.IMAGE, file: 'img/dil-02.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/dil-03.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/dil-01.jpg' },
  
  { type: SlideTypes.TEXT, text: 'Could the work grow by itself?' },
  { type: SlideTypes.TEXT, text: 'Growth of intelligence requires learning.' },
  
  // Talking Turtles
  { type: SlideTypes.TEXT, text: '"The problem of intelligence seems hopelessly profound."' },
  { type: SlideTypes.TEXT, text: 'Consciousness has something to do with intelligence.' },
  { type: SlideTypes.TEXT, text: 'That is also a hopelessly profound problem.' },
  
  { type: SlideTypes.IMAGE, file: 'img/minsky-papert-1971-csolomon_custom-fedfe48abb5cf61d250d8ed45862673524e77493.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/c.jpg' },
  { type: SlideTypes.TEXT, text: '"Knowledge must be constructed by the learner rather than taught by an authority or read passively from the world."' },
  { type: SlideTypes.TEXT, text: 'The sentiment of learning is one of optimism.' },
  
  { type: SlideTypes.TEXT, text: '"Programming is the sweet spot, the high leverage point in a digital society."' },
  { type: SlideTypes.TEXT, text: '"If we don’t learn to program, we risk being programmed ourselves."' },
  { type: SlideTypes.IMAGE, file: 'img/d-larger.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/screenshot.png' },
  { type: SlideTypes.IMAGE, file: 'img/talking-turtles-09.png' },
  { type: SlideTypes.IMAGE, file: 'img/a.png' },
  { type: SlideTypes.IMAGE, file: 'img/Arp_MustacheHat1923.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/b.png' },
  { url: '/turtles/', type: SlideTypes.IFRAME, sound: '/sound/b.wav' },
  { type: SlideTypes.IMAGE, file: 'img/both-turtles.jpg' },
  
  // New pedagogy
  { type: SlideTypes.TEXT, text: 'How to explain pictures to a dead hare?' },
  { type: SlideTypes.IMAGE, file: 'img/beuys21-larger.jpg' },
  { type: SlideTypes.TEXT, text: 'Could we develop a pedagogy for machine learning?' },
  
  { type: SlideTypes.TEXT, text: 'Thank you. For updates follow me on Twitter @harmvddorpel. Music by Ryuichi Sakamoto, Alva Noto and Christian Fennesz.' },
  { file: 'swf/dibbets.swf', type: SlideTypes.FLASH }
];

script.forEach((element, index) => {
  element.index = index;
});

export default script;
