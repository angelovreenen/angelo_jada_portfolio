const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const bookingForm = document.querySelector('.booking-form');

const closeMenu = () => {
	menuToggle.setAttribute('aria-expanded', 'false');
	siteNav.classList.remove('is-open');
	document.body.classList.remove('menu-open');
};

menuToggle.addEventListener('click', () => {
	const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
	menuToggle.setAttribute('aria-expanded', String(!isOpen));
	siteNav.classList.toggle('is-open', !isOpen);
	document.body.classList.toggle('menu-open', !isOpen);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
	link.addEventListener('click', (event) => {
		const target = document.querySelector(link.getAttribute('href'));
		if (!target) return;
		event.preventDefault();
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		closeMenu();
	});
});

window.addEventListener('scroll', () => {
	header.classList.toggle('scrolled', window.scrollY > 32);
}, { passive: true });

bookingForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const status = bookingForm.querySelector('.form-status');
	status.textContent = 'Thank you. We will be in touch shortly.';
	bookingForm.reset();
});

