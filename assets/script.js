function playWordAudio(w) {
  const word = w.toLowerCase();
  const voiceFileUrl = `http://dict.youdao.com/dictvoice?audio=${word}&type=2`;
  const audio = document.getElementById("voice-file");
  document.getElementById('audioSource').src = voiceFileUrl;
  audio.load();
  if (window.loopInterval) {
    clearInterval(window.loopInterval);
  }
  window.loopInterval = setInterval(() => {
    const wordEle = document.getElementById(word);
    let listPlaying = document.getElementsByClassName('playing');
    if (listPlaying.length > 0) {
      listPlaying[0].classList.remove('playing');
    }
    wordEle.classList.add('playing');
    audio.play();
    console.log('play', word);
  }, 1000);

}