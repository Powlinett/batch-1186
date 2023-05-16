const student = {
  firstName: 'Boris',
  lastName: 'Paillard',
  age: 42,
};

Object.keys(student).forEach((key) => {
  console.log(student[key]);
});

Object.values(student).forEach((value) => {
  console.log(value);
});

Object.entries(student).forEach(([key, value]) => {
  console.log(key, ': ', value);
});
