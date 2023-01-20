import throttle from 'lodash.throttle'
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(timeupdate) {
    localStorage.setItem('videoplayer-current-time', timeupdate.seconds);
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));



