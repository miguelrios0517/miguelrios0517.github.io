initLoader();

function initLoader() {
  const preloader = document.querySelector(".preloader");
  const preloaderText = document.querySelector(".preloader_inner");
  const animationDuration = 2000;
  const startTime = performance.now();

  requestAnimationFrame(updateProgress);

  function updateProgress(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(100, Math.floor((elapsedTime / animationDuration) * 100));

    preloaderText.textContent = `${progress}%`;

    if (progress < 100) {
      requestAnimationFrame(updateProgress);
    } else {
      showPageContent();
    }
  }

  function showPageContent() {
    preloader.classList.add("page-loaded");
  }
}
