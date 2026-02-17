document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById('transactionChart');

    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                datasets: [{
                    label: 'Transactions',
                    data: [120, 190, 300, 250, 400],
                    borderColor: '#38bdf8',
                    backgroundColor: 'rgba(56,189,248,0.2)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true
            }
        });
    }

});
