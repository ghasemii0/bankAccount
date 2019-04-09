// Business Logic
function BankAccount(name, amount) {
  this.name,
  this.amount
};

BankAccount.prototype.deposit = function(userDeposit) {
  if (userDeposit > 0) {
    this.amount += userDeposit;
  } else {
    console.log("Please select at least $1 to deposit.");
  }
};

BankAccount.prototype.withdraw = function(userWithdraw) {
  if (this.amount - userWithdraw >= 0) {
    this.amount -= userWithdraw;
  } else {
    console.log("Help! They're trying to rob us!");
  }
}

BankAccount.prototype.showMeTheMoney = function() {
  Alert(this.amount);
}
