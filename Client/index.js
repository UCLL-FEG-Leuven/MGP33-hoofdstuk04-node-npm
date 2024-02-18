import '../node_modules/chart.js/dist/chart.umd.js';

const n = 1000;
let randomValuesBelow0point5 = [];
let randomValuesAbove0point5 = [];

for (let i = 0; i < n; i++) {
  let random = Math.random();
  if (random < 0.5) {
    randomValuesBelow0point5.push(random);
  } else {
    randomValuesAbove0point5.push(random);
  }
}

const ctx = document.getElementById('pie-chart');
const chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Below 0.5', 'Above 0.5'],
    datasets: [{
      data: [randomValuesBelow0point5.length, randomValuesAbove0point5.length],
    }]
  }
});