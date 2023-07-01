const list = document.querySelector(".btn__list");
const items = document.querySelectorAll(".card-list__item");

function filter() {
	list.addEventListener("click", (ev) => {
		const targetId = ev.target.dataset.id;
		switch (targetId) {
			case "all":
				getItems("card-list__item");
				break;
			case "site":
				getItems(targetId);
				break;
			case "app":
				getItems(targetId);
				break;
			case "design":
				getItems(targetId);
				break;
			case "marketing":
				getItems(targetId);
				break;
		}
	});
}

filter();

function getItems(className) {
	items.forEach((item) => {
		if (item.classList.contains(className)) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}
