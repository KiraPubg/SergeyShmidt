
const footerInfo = document.querySelector(".footer__info");
const infoModal = document.querySelector(".info");
const infoMask = document.querySelector(".info__mask");
footerInfo.addEventListener("click", function () {
	infoModal.classList.add("active");
	infoMask.classList.add("active");
})
infoMask.addEventListener("click", function () {
	infoModal.classList.remove("active");
	infoMask.classList.remove("active");
})

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
	e.style.setProperty('--value', e.value);
	e.style.setProperty('--min', e.min == '' ? '0' : e.min);
	e.style.setProperty('--max', e.max == '' ? '100' : e.max);
	e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}
