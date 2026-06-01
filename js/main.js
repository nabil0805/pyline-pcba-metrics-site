(function () {
	var header = document.querySelector('.site-header');
	var reveals = document.querySelectorAll('.reveal');
	var menuToggle = document.querySelector('[data-menu-toggle]');
	var mobileNav = document.querySelector('[data-mobile-nav]');
	var yearNode = document.querySelector('[data-current-year]');
	var contactForm = document.querySelector('[data-contact-form]');
	var contactNext = document.querySelector('[data-contact-next]');

	if (yearNode) {
		yearNode.textContent = String(new Date().getFullYear());
	}

	if (header) {
		var onScroll = function () {
			if (window.scrollY > 20) {
				header.classList.add('scrolled');
			} else {
				header.classList.remove('scrolled');
			}
		};

		window.addEventListener('scroll', onScroll);
		onScroll();
	}

	if (menuToggle && mobileNav) {
		menuToggle.addEventListener('click', function () {
			mobileNav.classList.toggle('open');
			menuToggle.setAttribute('aria-expanded', mobileNav.classList.contains('open') ? 'true' : 'false');
		});
	}

	if (contactForm) {
		if (contactNext) {
			contactNext.value = new URL('thank-you.html', window.location.href).href;
		}
	}

	if (reveals.length > 0 && 'IntersectionObserver' in window) {
		var observer = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add('show');
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.12,
				rootMargin: '0px 0px -8% 0px'
			}
		);

		reveals.forEach(function (el) {
			observer.observe(el);
		});
	} else {
		reveals.forEach(function (el) {
			el.classList.add('show');
		});
	}
})();