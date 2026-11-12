'use strict';

// Typewriter effect 
const msg = 'Do you want to be my bestfriend?';
const txt = document.getElementById('txt');
const btns = document.getElementById('btns');
const eat = document.getElementById('eat');
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
  txt.textContent = 'I genuinely hate you and I will never be your friend.';
  btns.style.visibility = 'hidden';
  eat.style.display = 'block';
  moveEat();
  window.setInterval(moveEat, 1000);
});

// gif
function moveEat() {
  const imageWidth = eat.offsetWidth;
  const imageHeight = eat.offsetHeight;
  const textBounds = txt.getBoundingClientRect();
  const padding = 8;
  const maxX = Math.max(0, window.innerWidth - imageWidth);
  const maxY = Math.max(0, window.innerHeight - imageHeight);

  for (let attempt = 0; attempt < 100; attempt++) {
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    const overlapsText =
      x < textBounds.right + padding &&
      x + imageWidth > textBounds.left - padding &&
      y < textBounds.bottom + padding &&
      y + imageHeight > textBounds.top - padding;

    if (!overlapsText) {
      eat.style.left = `${x}px`;
      eat.style.top = `${y}px`;
      return;
    }
  }
}