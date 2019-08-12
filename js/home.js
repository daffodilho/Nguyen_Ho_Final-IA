(() => {
	console.log("TRAA!");

	// variables
	let sponsorText = document.querySelector("#sponsor-text"),
		sponsorLogo = document.querySelectorAll("#sponsor-img img"),
		upcomingEvent = document.querySelector("#event-con"),
		eventButtonRight = document.querySelector("#next-event"),
		eventButtonLeft = document.querySelector("#previous-event"),
		productList = document.querySelector("#product-list");
		// productButtonRight = document.querySelector("#next-product"),
		// productButtonLeft = document.querySelector("#previous-product");

	const ellipsisBtn = document.querySelectorAll("#ellipsis i");

	const sponsorData = 
	// Intro [0]
	["Special thanks to the support from our local businesses! Hover on any logo to view description.",
	// melchers [1]
	"Over the past couple of years the folks at Melchers Construction Ltd have offered up their beautiful boardroom for TRAA executive meetings. It's an ideal space with all the amenities required for us to accomplish all the 'behind the scenes' work of the TRAA. Many thanks go out to the continued support of Melchers Construction Ltd.",
	// guillevin [2]
	"Members of the trout hatchery rotation know the woes we've had with lighting in the hatchery. Even with larger fixtures installed a few years ago, it was still frustrating on days when the mercury dipped below -15C and the fluorescent technology just teased us with its dull flicker. Enter Mike Jeffries of Guillevin Greentech in London with nice set of bright and dependable (and new!) LED fixtures. Once they were installed it was like working in well-appointed laboratory.",
	// muma [3]
	"The TRAA voted unanimously to re-name the TRAA trout hatchery honouring Keith Wales' memory and his unselfish support of the TRAA's work in the London area, in particular Komoka Creek. Special thanks go out to Muma Manufacturing in St. Thomas for donating the beautiful laser-cut aluminum sign.",
	// try [4]
	"After cleaning up the area around the TRAA shed and trout hatchery, our trailer was quite full and needed to be emptied. A big 'thank you' goes out to Rick Vandersluis and Mike Seabrook of Try Recycling who allowed the TRAA to empty the trailer at their facility free of charge.",
	// angling [5]
	"Before we could take the trailer to Try Recycling, we needed to get the spare tire for the trailer fixed. Pat Devincenzo, proprietor of Angling Sports, offered to get it repaired. Turns out the tire needed replacing and Pat took care of it. Angling Sports also supplied cards for all TRAA members that entitle them to a discount equal to the tax on anything in the store. Thanks Pat, your generosity is greatly appreciated."];

	// functions
	function showSponsorText() {
		arrayIndex = this.dataset.arrayref;
		sponsorText.textContent = sponsorData[arrayIndex];
	}

	function hideSponsorText() {
		sponsorText.textContent = sponsorData[0];
	}

	function nextEvent() {
		upcomingEvent.style.right = 100 + "%";

		eventButtonRight.classList.add("fade");
		eventButtonLeft.classList.remove("fade");
	}

	function previousEvent() {
		upcomingEvent.style.right =  0 + "%";

		eventButtonRight.classList.remove("fade");
		eventButtonLeft.classList.add("fade");
	}

	function switchImage() {
		let offset = 100,
			multiplier = this.dataset.offset;

		console.log(offset * multiplier + "%");

		productList.style.right = offset * multiplier + "%";
	}

	// function nextProduct() {
	// 	if (productList.style.right = 0 + "%") {
	// 		productList.style.right = 100 + "%";

	// 		productButtonLeft.classList.remove("fade");
	// 		productButtonRight.classList.add("fade");

	// 	} else if (productList.style.right = 100 + "%") {
	// 		productList.style.right = 200 + "%";
	// 	}
	// }

	// function previousProduct() {
	// 	productList.style.right = 0 + "%";

	// 	productButtonLeft.classList.add("fade");
	// 	productButtonRight.classList.remove("fade");
	// }

	sponsorText.textContent += "Special thanks to the support from our local businesses! Hover on any logo to view description.";

	// events
	sponsorLogo.forEach(logo => logo.addEventListener("mouseover", showSponsorText));
	sponsorLogo.forEach(logo => logo.addEventListener("mouseout", hideSponsorText));
	eventButtonRight.addEventListener("click", nextEvent);
	eventButtonLeft.addEventListener("click", previousEvent);
	ellipsisBtn.forEach(button => button.addEventListener("click", switchImage));
	// productButtonRight.addEventListener("click", nextProduct);
	// productButtonLeft.addEventListener("click", previousProduct);
})();