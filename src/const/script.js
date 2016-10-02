import SlideTypes from './slide-types';

const script = [

  // intro
  { file: 'swf/dibbets.swf', type: SlideTypes.FLASH },
  { type: SlideTypes.TEXT, text: 'Hello, my name is Harm.' },
  { type: SlideTypes.TEXT, text: 'I was born in Holland, and currently live and work in Berlin.' },
  { type: SlideTypes.TEXT, text: 'I am an artist and programmer (in that particular order).' },
  { type: SlideTypes.TEXT, text: '"The problem of intelligence seems hopelessly profound."' },

  // Hopelessly Profound
  { file: 'swf/drostescrolls.swf', type: SlideTypes.FLASH },

  // Aesthetic dimension
  // Static Monuments
  { type: SlideTypes.TEXT, text: 'Indestructible, immutable beacons in time.'},

  // Sculptural Logic
  // Make software sculptural
  // Make object based art unstable
  // Horizontality vs. verticality
  { type: SlideTypes.TEXT, text: 'While monuments were vertically erected, software is horizontally spread thin across the network.' },

  // deli near info
  { url: 'http://delinear.info/75f69e9a9f', type: SlideTypes.IFRAME },
  { url: 'http://delinear.info/da1e3e85d4', type: SlideTypes.IFRAME },
  { url: 'http://delinear.info/11133c9783', type: SlideTypes.IFRAME },

  // The associations between information

  { type: SlideTypes.TEXT, text: 'As it has become impossible to construct an encompassing overview we must learn to navigate the network based on our local awareness.'},
  { type: SlideTypes.TEXT, text: 'Navigation over time constructs a narrative.'},

  // Software
  // Abandonware
  { type: SlideTypes.TEXT, text: 'A slowly dying orphan, forsaken by its creator and eventually by its users as well.'},

  // Death imitates Language
  { type: SlideTypes.IMAGE, file: 'img/dil-04.png' },
  { url: 'http://death.imitates.org/', type: SlideTypes.IFRAME },
  { url: 'http://death.imitates.org/language/e9a90066', type: SlideTypes.IFRAME },
  { type: SlideTypes.IMAGE, file: 'img/e9a900661fcbd57bf8e1cb3dc1e46b8ef2ad02a0.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/b.jpg' },
  { url: '/autobreeder/demo.html', type: SlideTypes.IFRAME, sound: '/sound/sound1.wav' },

  // New and Different

  { type: SlideTypes.TEXT, text: 'Creating something that already exists and presenting it as new is considered plagiarising.'},
  { type: SlideTypes.TEXT, text: 'Creating something that already exists and presenting it as old is considered kitsch.'},

  // Cryogenics
  { type: SlideTypes.IMAGE, file: 'img/Cryonics_satellite_interior-larger.jpg' },

  { type: SlideTypes.IMAGE, file: 'img/dil-02.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/dil-03.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/dil-01.jpg' },

  // Blasphemy

  // Change your mind

  // Talking Turtles
  { type: SlideTypes.TEXT, text: 'Knowledge must be constructed by the learner rather than taught by an authority or read passively from the world.'},
  { type: SlideTypes.TEXT, text: 'The sentiment of Learning is Optimism'},

  { type: SlideTypes.IMAGE, file: 'img/c.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/d-larger.jpg' },

  { type: SlideTypes.TEXT, text: 'Programming is the sweet spot, the high leverage point in a digital society. If we don’t learn to program, we risk being programmed ourselves.' },

  { type: SlideTypes.IMAGE, file: 'img/screenshot.png' },
  { type: SlideTypes.IMAGE, file: 'img/talking-turtles-09.png' },
  { type: SlideTypes.IMAGE, file: 'img/arp2.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/a.png' },
  { type: SlideTypes.IMAGE, file: 'img/Arp_MustacheHat1923.jpg' },
  { type: SlideTypes.IMAGE, file: 'img/b.png' },
  { type: SlideTypes.IMAGE, file: 'img/both-turtles.jpg' },
  { url: '/turtles/', type: SlideTypes.IFRAME },

  // New pedagogy
  { type: SlideTypes.IMAGE, file: 'img/beuys21-larger.jpg' }
];

script.forEach((element, index) => {
  element.index = index;
});

export default script;
