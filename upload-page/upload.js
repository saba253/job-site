// JavaScript to save form data to localStorage
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from submitting
    const jobName = document.getElementById('jobName').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    // Save data in localStorage
    localStorage.setItem('jobName', jobName);
    localStorage.setItem('name', name);
    localStorage.setItem('number', number);

    // Optionally, you can redirect to another page
    window.location.href = '../vacancies-page/vacancies.html';  // Go to result page
});