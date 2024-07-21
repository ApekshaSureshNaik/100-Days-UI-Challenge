const ctx = document.getElementById('energyChart').getContext('2d');

const energyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Energy Consumption 2023',
                data: [30, 35, 40, 50, 55, 60, 70],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Energy Consumption 2024',
                data: [25, 30, 45, 50, 65, 70, 80],
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Monthly Energy Consumption'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Energy Consumption (kWh)'
                }
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var value = 71; // Your dynamic value here
    var gauge = document.getElementById("meter");
    var percentage = (value / 100) * 100;
    var dashArray = percentage + ", 100";
    gauge.style.strokeDasharray = dashArray;
    document.querySelector(".percentage").textContent = value;
});
