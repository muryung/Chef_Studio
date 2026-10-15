// 햄버거 메뉴 클릭
const hamburgerBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener("mouseenter", () => {
  menu.classList.add("show");
});

hamburgerBtn.addEventListener("mouseleave", () => {
  menu.classList.remove("show");
});

// 화면 변경 시 메뉴 닫기
window.addEventListener("resize", () => {
	menu.classList.remove("show");
});
