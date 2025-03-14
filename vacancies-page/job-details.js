document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const jobIndex = urlParams.get("index");

    const vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];

    if (jobIndex !== null && vacancies[jobIndex]) {
        const job = vacancies[jobIndex];

        document.getElementById("jobTitle").textContent = job.jobName;
        document.getElementById("companyName").textContent = job.name;
        document.getElementById("vacancyCount").textContent = job.number;
        document.getElementById("jobDescription").textContent = job.description;
        document.getElementById("salaryAmount").textContent = job.salary + " ₾";
    } else {
        document.body.innerHTML = "<h2>Job not found</h2><a href='vacancies.html'>Back to Vacancies</a>";
    }
});