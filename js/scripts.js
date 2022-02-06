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

//Method For Finding Account
Bank.prototype.findAccount = function(id){
    if(this.accounts[id] !== undefined){
        return this.accounts[id];
    }
    return false
};
//Constructor For Creating Account
function Account(firstName , lastName , dob ,  initialDeposit){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.initialDeposit = initialDeposit;
    this.date = new Date().toLocaleDateString();
    this.transactions = {
        lastWithdrawal : 0,
        lastDeposit : initialDeposit,
        balance : initialDeposit
    }
}

//Method For The account fullname
Account.prototype.fullName = function(){
    return this.lastName + " " + this.firstName
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

