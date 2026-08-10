// ===== MENU MOBILE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== PINDAH "HALAMAN" TANPA RELOAD (SPA sederhana) =====
const pages = document.querySelectorAll('.page');
const navItems = document.querySelectorAll('[data-page]');

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const target = item.getAttribute('data-page');

    // tampilkan halaman tujuan, sembunyikan yang lain
    pages.forEach((p) => p.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    // update garis emas di navbar
    document.querySelectorAll('.nav-link').forEach((n) => n.classList.remove('active'));
    const linkAktif = document.querySelector('.nav-link[data-page="' + target + '"]');
    if (linkAktif) linkAktif.classList.add('active');

    // tutup menu mobile + scroll ke atas
    navLinks.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

console.log('Website Ghitraf hitam-emas berjalan! 🖤💛');