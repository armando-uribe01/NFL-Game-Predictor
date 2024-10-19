// NFL Game Predictor Chart (Simulated data)
const nflCtx = document.getElementById('nflChart').getContext('2d');
const nflChart = new Chart(nflCtx, {
    type: 'line',
    data: {
        labels: ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5'],
        datasets: [{
            label: 'Predicted Outcome',
            data: [3, 2, 4, 1, 5],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }, {
            label: 'Actual Outcome',
            data: [2, 3, 4, 1, 4],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});

// Stock Price Analysis Chart
const stockCtx = document.getElementById('stockChart').getContext('2d');
const stockChart = new Chart(stockCtx, {
    type: 'line',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Apple',
            data: [150, 160, 170, 180],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});

// Dropdown for stock selection
document.getElementById('stockDropdown').addEventListener('change', function () {
    const stock = this.value;
    let newData;

    if (stock === 'apple') {
        newData = [150, 160, 170, 180];
    } else if (stock === 'tesla') {
        newData = [700, 750, 720, 780];
    } else if (stock === 'amazon') {
        newData = [3200, 3300, 3400, 3100];
    }

    stockChart.data.datasets[0].data = newData;
    stockChart.data.datasets[0].label = stock.charAt(0).toUpperCase() + stock.slice(1);
    stockChart.update();
});
