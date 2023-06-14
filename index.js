// Write your solution in this file!
// intro to object oriented programming
// Initialize the employee object
const employee = {
    name: 'Steve austin',
    streetAddress: '123 Main Street'
  };
  
  // Function to update employee object with a new value for a specific key
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object using the spread operator to copy the employee object
    const updatedEmployee = { ...employee };//clone the original object
  
    // Update the value for the specified key in the new object
    updatedEmployee[key] = value;
  
    // Return the updated employee object
    return updatedEmployee;
  }
  
  // Example usage of the updateEmployeeWithKeyAndValue function
  //const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm Street');
  //console.log(updatedEmployee); // Output: { name: 'John Doe', streetAddress: '456 Elm Street' }
  //console.log(employee); // Output: { name: 'John Doe', streetAddress: '123 Main Street' }
  
  function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    // no update or cloning of original object
    employee[key] = value;
  
    // Return the updated employee object
    return employee;

  }
  // deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
  
  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };// clone the original object for non destructive updating
    delete updatedEmployee[key];
    return updatedEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  