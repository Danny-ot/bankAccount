let bank = new Bank();

function displayContent(account){
    let domElement = $("#accounts-info");
    let htmlString = "";
    let keys = Object.keys(account.accounts);
    keys.forEach(function(key){
        let account = bank.findAccount(key);
       htmlString += "<li class = 'data mt-3' id = " + account.id + ">" + account.fullName(); + "</li>"
    })
    domElement.html(htmlString);
}

$(document).ready(function(){

    //Click method for adding account
    $("#add-account").click(function(){
        $(".accounts").hide();
        $(".register-account-form").toggle();
    });

    //Register Account Form Submission
    $("#register-form").submit(function(event){
        event.preventDefault();
        const firstName = $("#firstname-input").val();
        const lastName = $("#lastname-input").val();
        const dob = $("#dob-input").val();
        const initDeposit = parseInt($("#initdepo-input").val());

        let account = new Account(firstName , lastName , dob , initDeposit);
        bank.addAccount(account);
        $("#firstname-input").val("");
        $("#lastname-input").val("");
        $("#dob-input").val("");
        $("#initdepo-input").val("");
        $(".register-account-form").hide();
        displayContent(bank);
        
    });

    // Click Method For Displaying Lists
    $("#check-account").click(function(){
        $(".register-account-form").hide();
        $(".accounts").toggle();
    })
})