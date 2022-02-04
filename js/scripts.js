//Constructor For The Bank
function Bank(){
    this.accounts = {

    };
    this.id = 0;
}

//Method For Assigning Id
Bank.prototype.assignId = function(){
    this.id += 1;
    return this.id;
};
//Method For Adding Account
Bank.prototype.addAccount = function(account){
    account.id = this.assignId();
    this.accounts[account.id] = account;
};

//Constructor For Creating Account
function Account(firstName , lastName , initialDeposit){
    this.firstName = firstName;
    this.lastName = lastName;
    this.initialDeposit = initialDeposit;
    this.date = new Date().toLocaleDateString();
    this.Transactions = {
        withdrawalAmount : 0,
        lastdeposit : initialDeposit,
        balance : initialDeposit
    }
}

//Method For Depositing Money
Account.prototype.deposit = function(amount){
    this.Transactions.deposit = amount;
    this.Transactions.balance += amount;
}

