//Constructor For The Bank
function Bank(){
    this.accounts = {

    };
    this.id = 0;
}

//Method For Assigning Id

//Method For Adding Account
Bank.prototype.addAccount = function(account){

}

//Constructor For Creating Account
function Account(firstName , lastName , initialDeposit){
    this.firstName = firstName;
    this.lastName = lastName;
    this.initialDeposit = initialDeposit;
    this.date = new Date().toLocaleDateString();
    this.Transactions = {
        withdrawalAmount : 0,
        deposit : initialDeposit,
        balance : 0
    }
}

