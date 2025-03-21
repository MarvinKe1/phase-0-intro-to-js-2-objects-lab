// Write your solution in this file!
// Initial employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Non-destructive update of employee object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Use the spread operator to create a new object and update the key-value pair
    return { ...employee, [key]: value };
  }
  
  // Destructive update of employee object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Directly mutate the employee object
    employee[key] = value;
    return employee;
  }
  
  // Non-destructive delete of employee object key-value pair
  function deleteFromEmployeeByKey(employee, key) {
    // Use the spread operator to return a new object without the specified key
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Destructive delete of employee object key-value pair
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Directly mutate the employee object by deleting the key
    delete employee[key];
    return employee;
  }
  
  module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  