document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        let isValid = true;

        const jobName = document.getElementById("jobName").value.trim();
        const name = document.getElementById("name").value.trim();
        const number = document.getElementById("number").value.trim();
        const description = document.getElementById("description").value.trim();
        const salary = document.getElementById("salary").value.trim();

        // Job Name Validation (Required)
        if (jobName === "") {
            alert("გთხოვთ შეიყვანოთ ვაკანსიის დასახელება.");
            isValid = false;
        }

        // Name Validation (Only letters allowed)
        const nameRegex = /^[ა-ჰa-zA-Z\s]+$/;
        if (!nameRegex.test(name)) {
            alert("კომპანიის სახელი უნდა შეიცავდეს მხოლოდ ასოებს.");
            isValid = false;
        }

        // Number Validation (Must be positive)
        if (number === "" || isNaN(number) || Number(number) <= 0) {
            alert("გთხოვთ შეიყვანოთ სწორი რაოდენობა (მინიმუმ 1).");
            isValid = false;
        }

        // Description Validation (Required)
        if (description.length < 10) {
            alert("გთხოვთ შეიყვანოთ მინიმუმ 10 სიმბოლო ვაკანსიის აღწერისთვის.");
            isValid = false;
        }

        // Salary Validation (Must be a positive number)
        if (salary === "" || isNaN(salary) || Number(salary) <= 0) {
            alert("გთხოვთ შეიყვანოთ სწორი ხელფასი (მინიმუმ 1).");
            isValid = false;
        }

        if (isValid) {
            let vacancies = JSON.parse(localStorage.getItem("vacancies")) || [];

            const newVacancy = {
                jobName: jobName,
                name: name,
                number: number,
                description: description,
                salary: salary // Save the salary
            };

            vacancies.push(newVacancy);
            localStorage.setItem("vacancies", JSON.stringify(vacancies));

            window.location.href = "../vacancies-page/vacancies.html";
        }
    });
    
});