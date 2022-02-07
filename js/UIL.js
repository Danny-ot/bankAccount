let bank = new Bank();

// Function For Displaying Contents
function displayContent(account) {
    let domElement = $("#accounts-info");
    let htmlString = "";
    let keys = Object.keys(account.accounts);
    keys.forEach(function (key) {
        let account = bank.findAccount(key);
        htmlString += "<li class = 'data mt-3' id = " + account.id + ">" + account.fullName(); + "</li>"
    })
    domElement.html(htmlString);
}


// Function For attaching the accountlistener
function attachListener() {
    // Listener For The Li Click
    $("ul#accounts-info").on("click", "li", function () {
        $(".details-transaction").html("<button class='btn btn-outline-info col-xsm-1 details' type='button'>Details</button>" + "<button class='btn btn-outline-dark col-xsm-2 ml-3 transaction-btn' id =" + this.id + " type='button'>Make Transaction</button>")
        $(".details-transaction").show();
        $(".transaction").hide();
        displayDetails(this.id);
    });

    // Listener For The details Button Click
    $(".details-transaction").on("click", ".details", function () {
        $(".transaction").hide();
        $("#details-display").toggle();
    });

    // Listener For The transactions button click
    $(".details-transaction").on("click", ".transaction-btn", function () {
        
        $("#details-display").hide();
        $("#transact").empty();
        $(".transact-btn").attr("id" , this.id);
        let account = bank.findAccount(this.id);
        $("#balance-output").html(account.transactions.balance);
        $(".transaction").toggle();
    });


    // Listener For The delete button click
    $(".buttons").on("click", ".deleteButton", function () {
        bank.deleteAccount(this.id);
        $("#details-display").hide();
        $(".details-transaction").hide();
        displayContent(bank)
    })
}

// function for account details display
function displayDetails(id) {
    let account = bank.findAccount(id);
    $("#firstname-display").html(account.firstName);
    $("#lastname-display").html(account.lastName);
    $("#dob-display").html(account.dob);
    $("#init-depo-display").html(account.initialDeposit);
    let button = $(".buttons");
    button.empty();
    button.html("<button class = 'btn btn-light deleteButton' id = " + account.id + ">Delete </button>")
}

$(document).ready(function () {
    attachListener();
    //Click method for adding account
    $("#add-account").click(function () {
        $(".accounts").hide();
        $(".register-account-form").toggle();
    });

    //Register Account Form Submission
    $("#register-form").submit(function (event) {
        event.preventDefault();
        const firstName = $("#firstname-input").val();
        const lastName = $("#lastname-input").val();
        const dob = $("#dob-input").val();
        let initDeposit = parseInt($("#initdepo-input").val());
        if(isNaN(initDeposit) === true){
            initDeposit = 0;
        }
        let account = new Account(firstName, lastName, dob, initDeposit);
        bank.addAccount(account);
        $("#firstname-input").val("");
        $("#lastname-input").val("");
        $("#dob-input").val("");
        $("#initdepo-input").val("");
        $(".register-account-form").hide();
        displayContent(bank);



    });

    // Click Method For Displaying Lists
    $("#check-account").click(function () {
        $(".register-account-form").hide();
        $(".accounts").toggle();
    });


   
    // Form Submission for withdrawal and deposit
    $(".transact-btn").click(function () {
        const withdraw = $("#withdrawal-input").val();
        const deposit = $("#depsit-input").val();
        let key = $(this).attr("id");
        let account = bank.findAccount(key);
        $("#balance-output").html(account.transactions.balance);
        if (withdraw !== "" && deposit !== "") {
            $("#transaction-warning").show();
            $("#withdraw-warning").hide();
        }
        else if (withdraw !== "" && deposit === "") {
            $("#transaction-warning").hide();
            if(account.withDraw(parseInt(withdraw)) === false){
                $("#withdraw-warning").show();
            }else{
                $("#withdraw-warning").hide();
                
            }
            
            $("#balance-output").html(account.transactions.balance);
            $("#withdrawal-input").val("");
            $("#depsit-input").val("");
        }
        else if (withdraw === "" && deposit !== "") {
            $("#transaction-warning").hide();
            $("#withdraw-warning").hide();
            account.deposit(parseInt(deposit));
            $("#balance-output").html(account.transactions.balance);
            $("#withdrawal-input").val("");
            $("#depsit-input").val("");
        }

    })

})