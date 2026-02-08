	const toggleBtn = document.getElementById("theme-toggle");
	const body = document.body;

	toggleBtn.addEventListener("click", () => {
  		if (body.classList.contains("light-mode")) {
			body.classList.replace("light-mode", "dark-mode");
		} else {
			body.classList.replace("dark-mode", "light-mode");
		}
	});


	const searchInput = document.getElementById("search-input");
	const articles = document.querySelectorAll("main article");

	searchInput.addEventListener("input", () => {
	const query = searchInput.value.toLowerCase();

	articles.forEach(article => {
		const text = article.innerText.toLowerCase();
		article.style.display = text.includes(query) ? "" : "none";
		});
	});