document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function () {
        const srn = document.getElementById('srn').value;
        const password = document.getElementById('password').value;

        if (srn === '02fe22bcs040' && password === 'harsh123') {
            // Hide the login section
            document.getElementById('login').style.display = 'none';
            // Show the hidden sections
            const hiddenSections = document.querySelectorAll('.hidden-section');
            hiddenSections.forEach(section => section.style.display = 'flex');
            // Enable scrolling
            document.body.classList.remove('no-scroll');

            // Smooth scroll to the next section
            const nextSection = document.getElementById('hero');
            nextSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Invalid SRN or password. Please try again.');
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('barchart').getContext('2d');
    const ctx1 = document.getElementById('barchart1').getContext('2d');

    const chartData = {
        labels: ['ASR', 'MC', 'OOPS', 'POCD', 'OSPP', 'EDA'],
        datasets: [{
            label: 'Attendance',
            data: [68, 52, 100, 72, 44, 92],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutBounce'
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return 'Attendance: ' + tooltipItem.raw;
                    }
                }
            }
        }
    };

    function createChart(ctx) {
        return new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: options
        });
    }

    let chart = createChart(ctx);
    let chart1 = createChart(ctx1);

    setInterval(function () {
        chart.destroy();
        chart1.destroy();
        chart = createChart(ctx);
        chart1 = createChart(ctx1);
    }, 10000);
});
