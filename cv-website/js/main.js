const intro = document.getElementById('intro');
const cv = document.getElementById('cv');
const bgBlur = document.getElementById('bg-blur');

document.getElementById('view-cv').addEventListener('click', function() {
  // Intro fade out
  intro.style.opacity = '0';

  setTimeout(() => {
    intro.style.display = 'none';

    // Blur kaldır
    bgBlur.style.backdropFilter = 'blur(0)';

    // CV göster ve animasyon uygula
    cv.style.display = 'block';
    setTimeout(() => {
      cv.style.opacity = '1';
      cv.style.transform = 'scale(1)';
    }, 50);
  }, 1000);
});
