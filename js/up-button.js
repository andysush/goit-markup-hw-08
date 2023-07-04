const scrollBtn = document.querySelector(".up__arrow");

window.onscroll = () => {
	if (window.scrollY > 600) {
		scrollBtn.style = "opacity:1";
	} else if (window.scrollY < 500) {
		scrollBtn.style = "opacity:0";
	}
};

scrollBtn.onClick = () => {
	window.scrollTo(0, 0);
};
