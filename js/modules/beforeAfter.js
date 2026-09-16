/* Interactive Before / After Slider Module */
export function initBeforeAfter() {
  const containers = document.querySelectorAll('[data-ba]');

  containers.forEach(container => {
    const slider = container.querySelector('.before-after__slider');
    const beforeImg = container.querySelector('.before-after__image--before');

    if (!slider || !beforeImg) return;

    slider.addEventListener('input', (e) => {
      const val = e.target.value;
      beforeImg.style.width = `${val}%`;
    });
  });
}
