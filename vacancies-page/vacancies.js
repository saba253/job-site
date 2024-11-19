const jobName = localStorage.getItem('jobName');
        const name = localStorage.getItem('name');
        const number = localStorage.getItem('number');

        document.getElementById('jobName').textContent = jobName;
        document.getElementById('displayName').textContent = name;
        document.getElementById('displayNumber').textContent = number;