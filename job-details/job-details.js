document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get("index");

    if (index === null) {
        console.error("No job index found in URL.");
        return;
    }

    const vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];

    if (index >= vacancies.length || index < 0) {
        console.error("Invalid job index.");
        return;
    }

    const job = vacancies[index];

    document.getElementById("jobTitle").textContent = job.jobName;
    document.getElementById("companyName").textContent = job.name;
    document.getElementById("jobDescription").textContent = job.description;
    document.getElementById("salary").textContent = job.salary;
    document.getElementById("vacancyCount").textContent = job.number;
    document.getElementById("uploadDate").textContent = job.uploadDate;
    document.getElementById("expirationDate").textContent = job.expirationDate;
});