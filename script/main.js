// sticky header transition refacto

function initApp() {
	// all pages //
	handleHeader();
	handleFooter();

	// services page
	if (getPage() === "services") {
		handleTarifTable();
	}
}

function handleHeader() {
	// open / close mobile nav //
	const mobileMenuIcon = document.querySelector("#mobileMenuIcon");
	mobileMenuIcon.addEventListener("click", () => {
		const mobileMenu = document.querySelector(".header--nav");
		const bodyScreen = document.querySelector("#bodyScreen");

		mobileMenu.classList.toggle("opened");
		bodyScreen.classList.toggle("opened");
	});

	// handle window size change when menu opened //
	window.addEventListener("resize", () => {
		const mobileMenu = document.querySelector(".header--nav");
		const bodyScreen = document.querySelector("#bodyScreen");
		const media = getMedia();

		if (
			window.innerWidth > 769 &&
			[...mobileMenu.classList].includes("opened")
		) {
			mobileMenu.classList.toggle("opened");
			bodyScreen.classList.toggle("opened");
		}
	});

	// sticky header transition //
	window.addEventListener("scroll", () => {
		const header = document.querySelector("#header");
		const mobileMenuIcon = document.querySelector("#mobileMenuIcon");

		if (getMedia() === "mobile") {
			if (window.scrollY > 40 && ![...header.classList].includes("sticky")) {
				header.classList.toggle("sticky");
				mobileMenuIcon.src = "./public/images/menu_white.png";
			}

			if (window.scrollY < 15 && [...header.classList].includes("sticky")) {
				header.classList.toggle("sticky");
				mobileMenuIcon.src = "./public/images/menu.png";
			}
		}

		if (getMedia() === "desk" || getMedia() === "tab") {
			if (window.scrollY > 140 && ![...header.classList].includes("sticky")) {
				header.classList.toggle("sticky");
				mobileMenuIcon.src = "./public/images/menu_white.png";
			}

			if (window.scrollY < 5 && [...header.classList].includes("sticky")) {
				header.classList.toggle("sticky");
				mobileMenuIcon.src = "./public/images/menu.png";
			}
		}
	});
}

function handleTarifTable() {
	return null;
}

function handleFooter() {
	// stay update with date !
	const copyrights = document.querySelector("#copyrights");
	copyrights.innerHTML = `Tous droits réservés - ${getYear()}`;
}

function getPage() {
	if (document.querySelector("#page"))
		return document.querySelector("#page").dataset.page;
}

function getMedia() {
	const windowWidth = window.innerWidth;

	if (windowWidth < 769) {
		return "mobile";
	}
	if (windowWidth > 769 && windowWidth < 976) {
		return "tab";
	}
	if (windowWidth > 976) {
		return "desk";
	}
}

function getYear() {
	const date = new Date().getFullYear();
	return date;
}

initApp();
