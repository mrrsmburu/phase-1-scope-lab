// declare global variable customerName
var customerName = "bob";

// function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

// function to set global variable bestCustomer
function setBestCustomer() {
   bestCustomer = "not bob";
  return bestCustomer;
}

// function to overwrite global variable bestCustomer
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
  return bestCustomer;
}

// declare global constant leastFavoriteCustomer
const leastFavoriteCustomer = "Karen";

// function to attempt to change global constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Bob";
  // this will throw an error as constants cannot be reassigned
}