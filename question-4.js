const alphaTech = [
  { name: "Alice", age: 23, department: "Engineering" },
  { name: "Bob", age: 19, department: "Design" },
];

const betaSoft = [
  { name: "Charlie", age: 28, department: "Engineering" },
  { name: "David", age: 17, department: "Support" },
];

const gammaDev = [
  { name: "Eve", age: 25, department: "Marketing" },
  { name: "Faythe", age: 18, department: "Engineering" },
  { name: "Grace", age: 20, department: "Engineering" },
];
const allEmployees = [...alphaTech, ...betaSoft, ...gammaDev];
const result = allEmployees
  .filter((employees) => {
    return employees.department === "Engineering" && employees.age >= 20;
  })
  .map((employee) => {
    return {
      name: employee.name,
      company: "ติดตรงนี้ครับ T T"
    };
  });

console.log(result);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
