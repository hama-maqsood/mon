const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer_year');
const allNavItems = document.querySelectorAll('.nav__link');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
	document.body.classList.toggle('sticky-body');

	allNavItems.forEach((navItem) => {
		navItem.addEventListener('click', () => {
			navBtn.classList.remove('is-active');
			navMobile.classList.remove('nav-mobile--active');
			document.body.classList.remove('sticky-body');
		});
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
