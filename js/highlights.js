(() => {
	console.log("TRAA Highlights!");

	let projectList = document.querySelector("#project-list"),
		projectButtonLeft = document.querySelector("#previous-project"),
		projectButtonRight = document.querySelector("#next-project");

	function previousProject() {
		projectList.style.right = 0 + "%";
		projectButtonRight.classList.remove("fade");
		projectButtonLeft.classList.add("fade");
	}

	function nextProject() {
		projectList.style.right = 100 + "%";
		projectButtonRight.classList.add("fade");
		projectButtonLeft.classList.remove("fade");
	}

	projectButtonLeft.addEventListener("click", previousProject);
	projectButtonRight.addEventListener("click", nextProject);

})();