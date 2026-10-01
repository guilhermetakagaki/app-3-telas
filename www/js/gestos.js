// Deslizar para a esquerda = avança | Deslizar para a direita = volta
const ORDEM = ['/', '/perfil', '/config'];
let inicioX = 0;

document.addEventListener('touchstart', (e) => {
  inicioX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - inicioX;
  if (Math.abs(dx) < 80) return; // ignora toques e movimentos curtos

  const router = document.querySelector('ion-router');
  const rota = location.hash.replace('#', '') || '/';
  const i = ORDEM.indexOf(rota);

  if (dx < 0 && i < ORDEM.length - 1) router.push(ORDEM[i + 1]); // esquerda: avança
  if (dx > 0 && i > 0) router.back();                            // direita: volta
});
