'use strict';

// Typewriter effect 
const msg = 'Do you want to be my bestfriend?';
const txt = document.getElementById('txt');
const btns = document.getElementById('btns');
let n = 0;

function type() {
  n++;
  if (txt.firstChild) {
    txt.firstChild.nodeValue = msg.slice(0, n);
  } else {
    txt.prepend(msg.slice(0, n));
  }
  if (n < msg.length) {
    setTimeout(type, 70);
  } else {
    btns.style.visibility = 'visible';
  }
}
type();

// No button
const no = document.getElementById('no');

function dodge() {
  const dx = (Math.random() - 0.5) * 160;
  const dy = (Math.random() - 0.5) * 120;
  no.style.transform = `translate(${dx}px, ${dy}px)`;
}

no.addEventListener('pointerenter', dodge);
no.addEventListener('click', dodge);

// Yes button
document.getElementById('yes').addEventListener('click', () => {
txt.textContent = 'Yay! Best friends!';
btns.style.visibility = 'hidden';
});