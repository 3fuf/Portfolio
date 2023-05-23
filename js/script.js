const btn = document.querySelector(".burger");
const navBtn = document.querySelector(".nav__btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
	btn.classList.toggle("is-active");
	navBtn.classList.toggle("nav__btn--active");
	body.classList.toggle("lock");
});

const navBtnWork = document.querySelector(".work");

navBtnWork.addEventListener("click", () => {
	btn.classList.remove("is-active");
	navBtn.classList.remove("nav__btn--active");
	descContent.classList.remove("description--active");
	body.classList.remove("lock");
});

const navBtnAbout = document.querySelector(".about");
const descContent = document.querySelector(".description");

navBtnAbout.addEventListener("click", () => {
	descContent.classList.toggle("description--active");
	btn.classList.remove("is-active");
	navBtn.classList.remove("nav__btn--active");
	body.classList.toggle("lock");
});

const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener("click", function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute("href");

		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}
