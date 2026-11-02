// Menu no celular
const menu = document.getElementById('menu');
document.getElementById('menuBtn').addEventListener('click', () => menu.classList.toggle('aberto'));
menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('aberto'); });

// Foto abre em tamanho grande ao clicar
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');

function abrir(img) {
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lb.classList.add('ativo');
  lb.setAttribute('aria-hidden', 'false');
}
function fechar() {
  lb.classList.remove('ativo');
  lb.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('img[data-zoom]').forEach(img => img.addEventListener('click', () => abrir(img)));
lb.addEventListener('click', e => { if (e.target !== lbImg) fechar(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') fechar(); });
