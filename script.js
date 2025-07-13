const bgMusic = document.getElementById('bgMusic');

document.getElementById('nextBtn1').addEventListener('click', function() {
  document.getElementById('slide1').classList.add('hidden');
  document.getElementById('slide2').classList.remove('hidden');
  bgMusic.play(); // start music
});

document.getElementById('nextBtn2').addEventListener('click', function() {
  document.getElementById('slide2').classList.add('hidden');
  document.getElementById('slide3').classList.remove('hidden');
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });
});
