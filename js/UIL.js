let bank = new Bank();



$(document).ready(function(){

    //Click method for adding account
    $("#add-account").click(function(){
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
        
    })
})