import $ from 'jquery';
import Screen from './abstract';

export default class ImageScreen extends Screen {
  constructor(screenData, $parent) {
    super(screenData, $parent);
    const url = screenData.file;

    const image = new Image();
    image.onload = () => {
      $(image).addClass('fullsize-image');
      this.$screen.append(image);
      this.position(image);
    };

    image.src = url;
  }

  position(image) {
    const viewportWidth = $(window).width();
    const viewportHeight = $(window).height();
    const imageRatio = image.width / image.height;
    const viewportRatio = viewportWidth / viewportHeight;

    if (imageRatio > viewportRatio) {
      image.width = viewportWidth;
      image.height = viewportWidth / imageRatio;
    } else {
      image.height = viewportHeight;
      image.width = viewportHeight * imageRatio;
    }

    $(image).css({
      left: (viewportWidth - image.width) / 2,
      top: (viewportHeight - image.height) / 2
    });
  }
}
