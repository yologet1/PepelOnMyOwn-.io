document.querySelectorAll('.buttons a').forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Отменим стандартное действие перехода по ссылке
    const originalScale = button.style.transform;

    // Применим анимацию (увеличение)
    button.style.transition = 'transform 0.3s ease-in-out';
    button.style.transform = 'scale(1.2)';

    // Вернемся к исходному состоянию после анимации
    setTimeout(() => {
      button.style.transform = originalScale;
      window.open(button.href, '_blank'); // Откроем ссылку после анимации
    }, 300);
  });
});
