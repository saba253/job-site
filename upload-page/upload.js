document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    if (!form) {
        console.error("❌ Form not found in upload.html");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const jobName = document.getElementById("jobName");
        const name = document.getElementById("name");
        const description = document.getElementById("description");
        const salary = document.getElementById("salary");
        const location = document.getElementById("location");

        if (!jobName || !name || !description || !salary || !location) {
            console.error("❌ One or more form fields are missing in upload.html!");
            return;
        }

        const jobNameValue = jobName.value.trim();
        const nameValue = name.value.trim();
        const descriptionValue = description.value.trim();
        const salaryValue = salary.value.trim();
        const locationValue = location.value.trim();

        // Validate Fields
        if (!jobNameValue || !nameValue || !descriptionValue || !salaryValue || !locationValue) {
            alert("❌ გთხოვთ შეავსოთ ყველა ველი სწორად!");
            return;
        }

        // Validate Salary
        const salaryAmount = parseFloat(salaryValue);
        if (isNaN(salaryAmount) || salaryAmount <= 0) {
            alert("❌ ხელფასი უნდა იყოს სწორი რიცხვი!");
            return;
        }

        let vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];

        const uploadDate = new Date();
        const expirationDate = new Date(uploadDate);
        expirationDate.setMonth(expirationDate.getMonth() + 1);

        const newVacancy = {
            jobName: jobNameValue,
            name: nameValue,
            description: descriptionValue,
            salary: salaryAmount + " ₾",
            location: locationValue,
            uploadDate: uploadDate.toISOString().split("T")[0],
            expirationDate: expirationDate.toISOString().split("T")[0]
        };

        vacancies.push(newVacancy);
        localStorage.setItem("vacancies", JSON.stringify(vacancies));

        alert("✅ ვაკანსია წარმატებით გამოქვეყნდა!");
        window.location.href = "../vacancies-page/vacancies.html";
    });
});