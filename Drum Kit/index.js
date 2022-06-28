function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip it if it's not a 
  e.target.classList.remove('playing');
}
 
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.div[data-key="${e.key}"]`);
  if (!audio) return; // stop function from running all together
  key.classList.add('playing');
  audio.currentTime = 0; //rewind to the start
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);