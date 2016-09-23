import $ from 'jquery';
import Screen from './abstract';

export default class FlashScreen extends Screen {
  constructor(screenData, $parent) {
    super(screenData, $parent);
    const url = screenData.file;
    const html = `
      <object 
        classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" 
        codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"
        width="100%" height="100%" id="movie" wmode="transparent">
        <param name="movie" value="${url}" />
        <embed src="${url}" quality="high" wmode="transparent" 
        width="100%" height="100%" name="movie"  
        type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />
      </object>`;

    const $flash = $(html);
    this.$screen.append($flash);
  }
}
