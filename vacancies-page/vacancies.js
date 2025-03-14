document.addEventListener("DOMContentLoaded", function () {
    const vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];
    const vacanciesTable = document.querySelector("tbody");

    if (vacancies.length === 0) {
        console.log("No job data found in localStorage");
        return;
    }

    // Populate the vacancies table
    vacanciesTable.innerHTML = `
        <tr>
            <th>ვაკანსიის დასახელება</th>
            <th>კომპანია</th>
            <th>ხელფასი (₾)</th>
            <th>ვაკანტური ადგილები</th>
        </tr>
    `;

    vacancies.forEach((vacancy, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><a href="job-details.html?index=${index}" class="job-link">${vacancy.jobName}</a></td>
            <td>${vacancy.name}</td>
            <td>${vacancy.salary} ₾</td>
            <td>${vacancy.number}</td>
        `;

        vacanciesTable.appendChild(row);
    });

    // --- SEARCH FUNCTIONALITY --- //
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    function filterVacancies() {
        const searchText = searchInput.value.toLowerCase().trim();
        const rows = vacanciesTable.querySelectorAll("tr:not(:first-child)"); // Exclude header row

        rows.forEach(row => {
            const jobTitle = row.cells[0].textContent.toLowerCase();
            const companyName = row.cells[1].textContent.toLowerCase();

            if (jobTitle.includes(searchText) || companyName.includes(searchText)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    // Search on button click
    searchButton.addEventListener("click", filterVacancies);

    // Real-time search as user types
    searchInput.addEventListener("input", filterVacancies);
});document.addEventListener("DOMContentLoaded", function () {
        const vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];
        const vacanciesTable = document.querySelector("tbody");
    
        if (vacancies.length === 0) {
            console.log("No job data found in localStorage");
            return;
        }
    
        // Populate the vacancies table
        vacanciesTable.innerHTML = `
            <tr>
                <th>ვაკანსიის დასახელება</th>
                <th>კომპანია</th>
                <th>ხელფასი (₾)</th>
                <th>ვაკანტური ადგილები</th>
            </tr>
        `;
    
        vacancies.forEach((vacancy, index) => {
            const row = document.createElement("tr");
    
            row.innerHTML = `
                <td><a href="job-details.html?index=${index}" class="job-link">${vacancy.jobName}</a></td>
                <td>${vacancy.name}</td>
                <td>${vacancy.salary} ₾</td>
                <td>${vacancy.number}</td>
            `;
    
            vacanciesTable.appendChild(row);
        });
    
        // --- SEARCH FUNCTIONALITY --- //
        const searchInput = document.getElementById("searchInput");
        const searchButton = document.getElementById("searchButton");
    
        function filterVacancies() {
            const searchText = searchInput.value.toLowerCase().trim();
            const rows = vacanciesTable.querySelectorAll("tr:not(:first-child)"); // Exclude header row
    
            rows.forEach(row => {
                const jobTitle = row.cells[0].textContent.toLowerCase();
                const companyName = row.cells[1].textContent.toLowerCase();
    
                if (jobTitle.includes(searchText) || companyName.includes(searchText)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        }
    
        // Search on button click
        searchButton.addEventListener("click", filterVacancies);
    
        // Real-time search as user types
        searchInput.addEventListener("input", filterVacancies);
    });