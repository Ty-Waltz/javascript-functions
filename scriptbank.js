let balance = 100



function deposit(amount) {
    if (amount > 0) {
        balance += amount; 
        console.log(`Deposited $${amount}. New balance: $${balance}`);
    } else {
        console.log("Deposit amount must be greater than 0.");
    }
}

function withdrawl(amount) {
    if (amount > 0) {
        balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${balance}`);
    } else if (amount > balance){
    console.log("Insufficient funds");
    } else {
        console.log("Enter an amount greater than 0")
    }
}

function checkBalance(amount) {
    console.log(`Your current balance: $${balance}`)
}

checkBalance();
deposit(40);
withdrawl(10);
checkBalance();