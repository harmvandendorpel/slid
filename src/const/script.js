import SlideTypes from './slide-types';

const script = [
  // intro
  { file: 'swf/dibbets.swf', type: SlideTypes.FLASH },
  { type: SlideTypes.TEXT, text: 'Hello, my name is Harm.' },
  { type: SlideTypes.TEXT, text: 'I am an artist who programs.' },
  { type: SlideTypes.TEXT, text: 'Let\'s talk about software as a medium (not a technology)' },
  { type: SlideTypes.TEXT, text: 'Let\'s consider software as cultural production.' },
  { type: SlideTypes.TEXT, text: 'Let\'s consider computer programming as a artistic practice.'},
  
  // then we can compare it to other means of cultural production
  //
  // such as sculpture
  
  
  // { type: SlideTypes.TEXT, text: '"The problem of intelligence seems hopelessly profound."' },
  // { type: SlideTypes.TEXT, text: 'Consciousness has something to do with intelligence.' },
  // { type: SlideTypes.TEXT, text: 'That is also a hopelessly profound problem.' },
  // { type: SlideTypes.TEXT, text: 'Besides that, I have probably put too many things into this presentation.' },

  // Hopelessly Profound
  // { file: 'swf/drostescrolls.swf', type: SlideTypes.FLASH },

  // Aesthetic dimension
  
  // Static Monuments
  { type: SlideTypes.TEXT, text: 'Indestructible, immutable beacons in time.' },

  // Sculptural Logic
  // { type: SlideTypes.TEXT, text: 'Mutable versus Immutable.' },

  // Horizontality vs. verticality
  { type: SlideTypes.TEXT, text: 'While monuments were vertically erected, software is horizontally spread thin across the network.' },
  
  { type: SlideTypes.TEXT, text: 'software does not come into being erected.' },// by an intuitive gesture or magical spell.' },
  
  { type: SlideTypes.TEXT, text: 'software grows in iterations and it is never complete.' }, // by an intuitive gesture or magical spell.' },
  // Abandonware
  { type: SlideTypes.TEXT, text: 'A slowly dying orphan, forsaken by its creator and eventually by its users as well.' },
  
  { type: SlideTypes.TEXT, text: 'I am going to show you a few projects based around questions of perpetual change and instability'},
  
  // deli near info
  
  { type: SlideTypes.TEXT, text: 'Delinear info: a deli near info' },
  
  { type: SlideTypes.TEXT, text: 'Social media has linear timelines.' },
  { type: SlideTypes.TEXT, text: 'The new is added on top, and the old at the bottom is fading away into oblivion.' },
  
  
  { url: 'http://delinear.info/75f69e9a9f', type: SlideTypes.IFRAME },
  { url: 'http://delinear.info/3a6ab37fce', type: SlideTypes.IFRAME },
  
  { type: SlideTypes.TEXT, text: 'Potential meaning is established in the space between chunks of information. ' },
  
  
  { type: SlideTypes.TEXT, text: 'It has become impossible to construct an encompassing overview.' },
  { type: SlideTypes.TEXT, text: 'Let\'s develop heuristics to navigate the network based on local awareness.' },
  { type: SlideTypes.TEXT, text: 'The traces of navigating in time create a narrative.' },
  { type: SlideTypes.IMAGE, file: 'img/ReleaseEarlyAbrons_08.jpg' },
  { type: SlideTypes.TEXT, text: 'The structure needs to be anachronistic.' },
  // Software
  
  // semiotics of natural language
  
  // words are defined by their relationship to other words
  
  // Death imitates Language
  
  
  
  // { url: 'video/strategies.html', type: SlideTypes.IFRAME },
  { type: SlideTypes.TEXT, text: 'Death imitates language.' },
  { type: SlideTypes.TEXT, text: 'Genetic algorithm, kinship, evolution.' },
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
  
  
  { type: SlideTypes.TEXT, text: 'Could the work itself grow?' },
  { type: SlideTypes.TEXT, text: 'Growth of intelligence requires learning.' },
  
  // Talking Turtles
  { type: SlideTypes.IMAGE, file: 'img/minsky-papert-1971-csolomon_custom-fedfe48abb5cf61d250d8ed45862673524e77493.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/c.jpg' },
  { type: SlideTypes.TEXT, text: 'Knowledge must be constructed by the learner rather than taught by an authority or read passively from the world.' },
  { type: SlideTypes.TEXT, text: 'The sentiment of learning is optimism, not nihilism.' },

  

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
  { type: SlideTypes.IMAGE, file: 'img/beuys21-larger.jpg' },
  { type: SlideTypes.TEXT, text: 'Do we have a pedagogy for machine learning?' },
  
  { type: SlideTypes.TEXT, text: 'Thank you. For updates follow me on twitter @harmvddorpel ' },
];

script.forEach((element, index) => {
  element.index = index;
});

export default script;
