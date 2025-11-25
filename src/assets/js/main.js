document.body.classList.add('js-enabled');

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('#navbar .navbar-item');
const animatedElements = document.querySelectorAll('.animate');
const navbar = document.getElementById('navbar');
const navToggler = document.querySelector('#navToggler');
const navNavigation = document.querySelector('#navNavigation');
const navList = document.querySelector('#navList');
const navThemeToggler = document.querySelector('#navThemeToggler');
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
        root.style.setProperty(
            '--menu-height-mobile',
            `${contentHeight}px`
        );
    }
    navNavigation.classList.toggle('is-open');
    navToggler.setAttribute('aria-expanded', !isExpanded);
});

root.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);

root.style.setProperty('--footer-height', `${footer.offsetHeight}px`);

// Theme toggling

function getUserTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }
    return storedTheme;
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

setTheme(getUserTheme());

navThemeToggler.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});



