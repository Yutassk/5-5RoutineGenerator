let weights = [];
let reps = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const calc = (w, r) => (w * r) / 40 + w;
let rm = [];

for (let i = 40; i < 301; i += 2.5) {
  weights.push(parseInt(i));
}

weights.forEach((weight) => {
  reps.forEach((rep) => {
    rm.push(Math.ceil(calc(weight, rep)));
  });
});

export { weights, reps, rm };
