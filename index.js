document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("indexSearchInput");
    const searchButton = document.getElementById("indexSearchButton");

    if (!searchInput || !searchButton) {
        console.error("❌ Search elements not found in index.html");
        return;
    }

    searchButton.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query !== "") {
            // Redirect to vacancies.html with search query
            window.location.href = `vacancies-page/vacancies.html?search=${encodeURIComponent(query)}`;
        }
    });

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
});