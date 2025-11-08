// Create animated background bees
(function createBees() {
  const container = document.getElementById('bee-bg');
  if (!container) return;
  const beeCount = 24;
  for (let i = 0; i < beeCount; i++) {
    const b = document.createElement('div');
    b.className = 'bee';
    const startX = Math.random() * 100;
    const delay = Math.random() * -20;
    const duration = 18 + Math.random() * 16;
    b.style.left = startX + 'vw';
    b.style.bottom = (-10 - Math.random() * 80) + 'px';
    b.style.animationDuration = duration + 's';
    b.style.animationDelay = delay + 's';
    container.appendChild(b);
  }
})();
