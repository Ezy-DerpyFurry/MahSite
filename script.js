window.addEventListener('load', () => {
  const text = document.querySelector('#welcometext');
  text.classList.add('animate');
});

document.getElementById("button3d").onclick = function() {
  introFunc();
};

function introFunc() {
  const text = document.querySelector('#welcometext');
  const button = document.querySelector('#button3d')
  
  text.classList.remove('introAnimate');
  button.classList.remove('animateLeave');
  void text.offsetWidth;
  button.classList.add('animateLeave');
  text.classList.add('introAnimate');
}