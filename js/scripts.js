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
function Account(firstName , lastName , age ,  initialDeposit){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.initialDeposit = initialDeposit;
    this.date = new Date().toLocaleDateString();
    this.transactions = {
        lastWithdrawal : 0,
        lastDeposit : initialDeposit,
        balance : initialDeposit
    }
}

//Method For Depositing Money
Account.prototype.deposit = function(amount){
    this.transactions.lastDeposit = amount;
    this.transactions.balance += amount;
};

//Method For Withdrawing Money
Account.prototype.withDraw = function(amount){
    if(this.transactions.balance < amount){
        return false;
    }else{
        this.transactions.balance -= amount;
        this.transactions.lastWithdrawal = amount;
        return true;
    }
}

