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

Bank.prototype.findAccount = function(name) {
  for (var i=0; i< this.bankAccounts.length; i++) {
      if (this.bankAccounts[i].name == name) {
        return this.bankAccounts[i];
      }
    };
  return false;
}

function BankAccount(name, amount) {
  this.name = name,
  this.amount = amount
}

BankAccount.prototype.deposit = function(depositAmount) {
  if (depositAmount > 0) {
    this.amount += depositAmount;
  } else {
    console.log("Please select at least $1 to deposit.");
  }
};

BankAccount.prototype.withdraw = function(withdrawalAmount) {
  if (this.amount - withdrawalAmount >= 0) {
    this.amount -= withdrawalAmount;
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
    var amount = parseInt($("input#initialDeposit").val());
    var account = new BankAccount(name, amount);
    bank.addAccount(account);
    console.log(bank);
  });
  $("form#balanceChange").submit(function(event){
    event.preventDefault();
    var nameSearch = $("input#desiredAccount").val();
    var depositAmount = parseInt($("input#deposit").val());
    var withdrawalAmount = parseInt($("input#withdrawal").val());
    var targetAccount = bank.findAccount(nameSearch);
    console.log(targetAccount);
    targetAccount.deposit(depositAmount);
    console.log(bank.findAccount("mustafa"));
  });
});
