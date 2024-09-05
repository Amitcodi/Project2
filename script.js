let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
var value  = document.getElementById("val");

// 1. PrintDeveloperbyMap
function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
      value.innerHTML += `<p>${JSON.stringify(employee)}</p>`;
    }
  });
}

// 2. PrintDeveloperbyForEach
function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
      value.innerHTML += `<p>${JSON.stringify(employee)}</p>`;
    }
  });
}

// 3. addData
function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
  value.innerHTML += `<p>${JSON.stringify(newEmployee)}</p>`;
}

// 4. removeAdmin
function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
  value.innerHTML += `<p>${JSON.stringify(employee)}</p>`;
}

// 5. concatenateArray
function concatenateArray() {
  const newArr = [
    { id: 5, name: "anna", age: "22", profession: "designer" },
    { id: 6, name: "bob", age: "23", profession: "manager" },
    { id: 7, name: "chris", age: "21", profession: "developer" },
  ];
  
  const concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray);
  value.innerHTML = "";  // Clear existing content
  concatenatedArray.forEach((employee) => {
    value.innerHTML += `<p>${JSON.stringify(employee)}</p>`;
  });
}