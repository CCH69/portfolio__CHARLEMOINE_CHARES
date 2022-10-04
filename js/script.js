let parent = document.querySelectorAll(".animate-text");
for (let i = 0; i < parent.length; i++) {
	parent[i].style.width = parent[i].children[0].clientWidth + "px";
}

// Cursor

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

// Cursor

// var lastScrollTop = 0;
// let titleTop = document.querySelector(".animate-text.top");
// let titleLeft = document.querySelector(".animate-text.left");

// window.addEventListener("scroll", function () {
// 	var st = window.pageYOffset || document.documentElement.scrollTop;

// 	if (st >= 80) {
// 		if (titleTop.classList.contains("js-animated-text-down")) {
// 			titleTop.classList.remove("js-animated-text-down");
// 		}
// 		if (titleTop.classList.contains("stop__animation")) {
// 			titleTop.classList.remove("stop__animation");
// 		}

// 		titleTop.classList.add("js-animated-text-up");

// 		// texte d en bas
// 		if (titleLeft.classList.contains("js-animated-text-left-up")) {
// 			titleLeft.classList.remove("js-animated-text-left-up");
// 		}
// 		if (titleLeft.classList.contains("stop__animation__reverse")) {
// 			titleLeft.classList.remove("stop__animation__reverse");
// 		}
// 		titleLeft.classList.add("js-animated-text-left-down");
// 	}

// 	if (st <= 80 && st > 0) {
// 		titleTop.classList.remove("js-animated-text-up");
// 		titleTop.classList.add("js-animated-text-down");

// 		// texte d en bas
// 		titleLeft.classList.remove("js-animated-text-left-down");
// 		titleLeft.classList.add("js-animated-text-left-up");

// 		// $(titleTop).css("left", $(titleTop).position().left);
// 	}

// 	if (st === 0 || st === 20) {
// 		titleTop.classList.add("stop__animation");
// 		titleLeft.classList.add("stop__animation__reverse");
// 	}
// });
