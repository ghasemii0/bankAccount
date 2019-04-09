// Business Logic
function Bank() {
  this.bankAccounts = [],
  this.currentId = 0
}

Bank.prototype.addAccount = function(bankAccount) {
  bankAccount.id = this.assignId();
  this.bankAccounts.push(bankAccount);
}

Bank.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function BankAccount(name, amount) {
  this.name = name,
  this.amount = amount
}

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

var bank = new Bank();
// User Interface
$(document).ready(function(){
  $("form#accountRegistration").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var amount = $("input#initialDeposit").val();
    var account = new BankAccount(name, amount);
    bank.addAccount(account);
    console.log(bank);
  });
  $("form#balanceChange").submit(function(event){
    event.preventDefault();
    var depositAmount = $("input#deposit").val();
    var withdrawal = $("input#withdrawal").val();
    console.log(depositAmount, withdrawal);
  });
});
