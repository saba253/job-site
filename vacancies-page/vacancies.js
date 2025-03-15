document.addEventListener("DOMContentLoaded", function () {
    const vacanciesTable = document.querySelector("tbody");
    const searchInput = document.getElementById("searchInput");
    const minSalaryInput = document.getElementById("minSalary");
    const maxSalaryInput = document.getElementById("maxSalary");
    const locationFilter = document.getElementById("locationFilter");
    const searchButton = document.getElementById("searchButton");
    const filterButton = document.getElementById("filterButton");
    const toggleAdvancedSearch = document.getElementById("toggleAdvancedSearch");
    const advancedSearchDiv = document.getElementById("advancedSearch");

    if (!vacanciesTable || !searchInput || !searchButton || !filterButton || !toggleAdvancedSearch) {
        console.error("❌ Required elements not found in vacancies.html");
        return;
    }

    let vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];

    // Retrieve the search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search")?.toLowerCase().trim() || "";

    // Set the search query in the input field
    searchInput.value = searchQuery;

    function filterVacancies(applyFilters = false) {
        const searchText = searchInput.value.toLowerCase().trim();
        const minSalary = parseFloat(minSalaryInput.value) || 0;
        const maxSalary = parseFloat(maxSalaryInput.value) || Infinity;
        const selectedLocation = locationFilter.value.toLowerCase().trim();

        vacanciesTable.innerHTML = ""; // Clear table before adding rows

        vacancies.forEach((vacancy, index) => {
            const jobTitle = vacancy.jobName?.toLowerCase() || "";
            const companyName = vacancy.name?.toLowerCase() || "";
            const salary = parseFloat(vacancy.salary?.replace("₾", "").trim()) || 0;
            const location = vacancy.location?.toLowerCase() || "";

            // Search Query Check (always applies)
            if (searchText && !jobTitle.includes(searchText) && !companyName.includes(searchText)) return;

            // Apply salary & location filters **only when "Filter" button is clicked**
            if (applyFilters) {
                if (salary < minSalary || salary > maxSalary) return;
                if (selectedLocation && location !== selectedLocation) return;
            }

            const row = document.createElement("tr");
            row.innerHTML = `
                <td><a href="../job-details/job-details.html?index=${index}" class="job-link">${vacancy.jobName || "Unknown Job"}</a></td>
                <td>${vacancy.name || "Unknown Company"}</td>
                <td>${vacancy.salary ? vacancy.salary + " ₾" : "N/A"}</td>
                <td>${vacancy.uploadDate || "N/A"}</td>
                <td>${vacancy.expirationDate || "N/A"}</td>
                <td>${vacancy.location || "N/A"}</td>
            `;

            vacanciesTable.appendChild(row);
        });
    }

    // Run search on page load if there is a query
    filterVacancies();

    // Simple Search Button (only searches by title or company)
    searchButton.addEventListener("click", function () {
        filterVacancies(false); // ❌ Do NOT apply salary/location filters for normal search
    });

    // Advanced Search Filter Button (filters salary & location)
    filterButton.addEventListener("click", function () {
        filterVacancies(true); // ✅ Apply salary/location filters when filter button is clicked
    });

    // ✅ Toggle Advanced Search (Show/Hide Filters)
    toggleAdvancedSearch.addEventListener("click", function () {
        if (advancedSearchDiv.style.display === "none" || advancedSearchDiv.style.display === "") {
            advancedSearchDiv.style.display = "block";
            toggleAdvancedSearch.textContent = "🔽 დამალვა";
        } else {
            advancedSearchDiv.style.display = "none";
            toggleAdvancedSearch.textContent = "🔍 დეტალური ძებნა";
        }
    });
});