// audio element
var audioPlayer = document.createElement('audio');
audioPlayer.src = audioFileUrl;
audioPlayer.id = 'jPlayer';
// Play button
var btnPlay = document.createElement('img');
btnPlay.id = 'buttonPlay';
btnPlay.alt = "Play";
btnPlay.src = imagesFileUrl + 'mediaPlay.svg';
// Pause button
var btnPause = document.createElement('img');
btnPause.id = 'buttonPause';
btnPause.alt = "Pause";
btnPause.src = imagesFileUrl + 'mediaPause.svg';
btnPause.style.marginRight = '.25em';
// Volume Up
var volumeUp = document.createElement('img');
volumeUp.id = 'volUp';
volumeUp.alt = "Volume Up";
volumeUp.src = imagesFileUrl + 'volUp.svg';
volumeUp.style.marginLeft = '.25em';
// Volume Down
var volumeDown = document.createElement('img');
volumeDown.id = 'volDown';
volumeDown.alt = "Volume Down";
volumeDown.src = imagesFileUrl + 'volDown.svg';
volumeDown.style.marginLeft = '.25em';
// Show elements
document.getElementById('jsPlayer').appendChild(audioPlayer);
document.getElementById('jsPlayer').appendChild(btnPlay);
document.getElementById('jsPlayer').appendChild(btnPause);
// processing
var jPlayer = document.getElementById('jPlayer');
function playAudio() {
  jPlayer.play();
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'player-ajax.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;UTF-8');
  xhr.send('works_variation_id=' + postParam[0]);
  xhr.abort();
}
function pauseAudio() {
  jPlayer.pause();
}
function upVol() {
  jPlayer.volume += 0.25;
}
function downVol() {
  jPlayer.volume -= 0.25;
}
function timeFormatSec(secoundNum) {
  var obj = new Object();
  obj.hour = Math.floor((secoundNum / 60) / 60);
  obj.min = Math.floor((secoundNum / 60) % 60);
  obj.sec = Math.floor(secoundNum % 60);
  return obj;
}
document.getElementById('buttonPlay').addEventListener('click', function() {
  playAudio();
});
document.getElementById('buttonPause').addEventListener('click', function() {
  pauseAudio();
});
// Play time
var audioPlayTime = document.createElement('span');
audioPlayTime.id = 'playTime';
audioPlayTime.innerText = '0:00 / ';
audioPlayTime.style.verticalAlign = 'top';
document.getElementById('jsPlayer').appendChild(audioPlayTime);
jPlayer.addEventListener('timeupdate', function(e) {
  var playTime = jPlayer.currentTime;
  var val = timeFormatSec(playTime);
  document.getElementById('playTime').innerText = val.min + ':' + ('00' + val.sec).substr(-2) + ' / ';
});
// Total time
var audioDuration = document.createElement('span');
audioDuration.id = 'totalTime';
audioDuration.style.verticalAlign = 'top';
document.getElementById('jsPlayer').appendChild(audioDuration);
jPlayer.addEventListener('loadedmetadata',function(e) {
  var totalTime = jPlayer.duration;
  var val = timeFormatSec(totalTime);
  document.getElementById('totalTime').innerText = val.min + ':' + ('00' + val.sec).substr(-2) + ' ';
});
// Volume elements
document.getElementById('jsPlayer').appendChild(volumeUp);
document.getElementById('jsPlayer').appendChild(volumeDown);
document.getElementById('volUp').addEventListener('click', function() {
  upVol();
});
document.getElementById('volDown').addEventListener('click', function() {
  downVol();
});
