document.body.classList.add('js-enabled');

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('#navbar .navbar-item');
const animatedElements = document.querySelectorAll('.animate');
const navbar = document.getElementById('navbar');
const navToggler = document.querySelector('#navToggler');
const navNavigation = document.querySelector('#navNavigation');
const navList = document.querySelector('#navList');
const navThemeToggler = document.querySelector('#navThemeToggler');
const langSwitcher = document.getElementById('langSwitcher');
const langBanner = document.getElementById('langBanner');
const bannerLink = document.getElementById('langBannerLink');
const bannerClose = document.getElementById('langBannerClose');
const footer = document.querySelector('.footer-container');
const root = document.documentElement;

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const animatorOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
};

const animatorCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
const animator = new IntersectionObserver(animatorCallback, animatorOptions);

sections.forEach((section) => {
  observer.observe(section);
});

animatedElements.forEach((element) => {
  animator.observe(element);
});

navToggler.addEventListener('click', () => {
  const isExpanded = navToggler.getAttribute('aria-expanded') === 'true';
  if (!isExpanded) {
    const contentHeight = navList.offsetHeight;
    root.style.setProperty('--menu-height-mobile', `${contentHeight}px`);
  }
  navNavigation.classList.toggle('is-open');
  navToggler.setAttribute('aria-expanded', !isExpanded);
});

root.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);

root.style.setProperty('--footer-height', `${footer.offsetHeight}px`);

// Theme toggling

function getUserTheme() {
  const userTheme = localStorage.getItem('theme');
  if (!userTheme) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return userTheme;
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

navThemeToggler.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  saveTheme(newTheme);
});

applyTheme(getUserTheme());

// Language detection and setting

const SUPPORTED_LANGS = ['en', 'es'];
const DEFAULT_LANG = 'en';

function detectLanguage() {
  const userLang = navigator.language?.split('-')[0];
  return SUPPORTED_LANGS.includes(userLang) ? userLang : DEFAULT_LANG;
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);
}

function showLangBanner() {
  const savedLang = localStorage.getItem('language');
  const currentLang = document.documentElement.getAttribute('lang');
  const detectedLang = detectLanguage();

  if (!savedLang && currentLang !== detectedLang) {
    langBanner.show();
  }
}

langSwitcher.addEventListener('click', () => {
  const currentLang = document.documentElement.getAttribute('lang');
  const newLang = currentLang === 'en' ? 'es' : 'en';
  setLanguage(newLang);
});

bannerLink.addEventListener('click', () => {
  const currentLang = document.documentElement.getAttribute('lang');
  const newLang = currentLang === 'en' ? 'es' : 'en';
  setLanguage(newLang);
});

bannerClose.addEventListener('click', () => {
  langBanner.close();
});

window.addEventListener('load', () => {
  setTimeout(() => {
    showLangBanner();
  }, 500);
});
