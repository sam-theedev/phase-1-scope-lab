var customerName = 'bob'
const leastFavoriteCustomer = 'sam'
function customerName(){
    return customerName();

}

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
  
}
function setBestCustomer(){
    bestCustomer = 'not bob'

}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
  }
  
  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'billy'

  }
  function changeLeastFavoriteCustomer() {
     leastFavoriteCustomer = 'alex'
  }