(() => {
	console.log("TRAA!");

	var button = document.querySelector("#nav-button i");
	var mainNav = document.querySelector("#main-nav");

	function showMenu() {
		mainNav.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", showMenu, false);
		
})();