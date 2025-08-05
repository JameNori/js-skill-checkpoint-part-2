const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let moreFifty = students.filter((students) => {
  return students.score > 50;
});
let addTenPercent = moreFifty.map((moreFifty) => {
  let addTenScore = moreFifty.score;
  return (addTenScore += addTenScore * 0.1);
});
let sumTotal = addTenPercent.reduce((acc, cur) => {
  return acc + cur;
});
console.log(`Total score is ${sumTotal}`);
