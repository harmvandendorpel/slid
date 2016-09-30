export default class SoundPlayer {
  constructor(url) {
    this.audio = new Audio(url);
    this.audio.volume = 0;
    this.audio.play();

    const intervalId = setInterval(() => {
      const newVolume = this.audio.volume + 0.1;
      if (newVolume >= 1) {
        this.audio.volume = 1;
        clearInterval(intervalId);
      } else {
        this.audio.volume = newVolume;
      }
    }, 100);
  }

  destroy() {
    const intervalId = setInterval(() => {
      this.audio.volume *= 0.925;
      if (this.audio.volume < 0.01) {
        clearInterval(intervalId);
        this.audio.pause();
        delete this.audio;
      }
    }, 100);
  }
}
