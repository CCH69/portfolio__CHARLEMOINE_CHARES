document.addEventListener("DOMContentLoaded", function () {
	let parent = document.querySelectorAll(".animate-text");
	for (let i = 0; i < parent.length; i++) {
		parent[i].style.width = parent[i].children[0].clientWidth + "px";
	}
	// scrollToTop();
});
var lastScrollTop = 0;
// Cursor

if (window.innerWidth > 480) {
	var cursor = document.querySelector(".cursor");
	var cursorinner = document.querySelector(".cursor2");
	var a = document.querySelectorAll("a");

	document.addEventListener("mousemove", function (e) {
		var x = e.clientX;
		var y = e.clientY;
		cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
	});

	document.addEventListener("mousemove", function (e) {
		var x = e.clientX;
		var y = e.clientY;
		cursorinner.style.left = x + "px";
		cursorinner.style.top = y + "px";
	});

	document.addEventListener("mousedown", function () {
		cursor.classList.add("click");
		cursorinner.classList.add("cursorinnerhover");
	});

	document.addEventListener("mouseup", function () {
		cursor.classList.remove("click");
		cursorinner.classList.remove("cursorinnerhover");
	});

	a.forEach((item) => {
		item.addEventListener("mouseover", () => {
			cursor.classList.add("hover");
		});
		item.addEventListener("mouseleave", () => {
			cursor.classList.remove("hover");
		});
	});
}

$(".portfolio-caption").on("click", function (e) {
	e.preventDefault();

	let urlID = $(this)
		.closest(".portfolio-item")
		.find(".portfolio-link")
		.attr("href");

	$(urlID).modal("show");
});
