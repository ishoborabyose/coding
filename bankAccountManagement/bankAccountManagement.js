const readline = require("readline-sync");

class BankAccount {
  constructor(name, initialBalance = 0) {
    this.name = name;
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid amount. Please enter a positive number.");
      return;
    }

    this.balance += amount;
    console.log(
      `Successfully deposited $${amount}. Your new balance is $${this.balance}.`
    );
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Invalid amount. Please enter a positive number.");
      return;
    }

    if (amount > this.balance) {
      console.log(
        `Insufficient funds. You cannot withdraw more than $${this.balance}.`
      );
      return;
    }

    this.balance -= amount;
    console.log(
      `Successfully withdrew $${amount}. Your new balance is $${this.balance}.`
    );
  }

  viewBalance() {
    console.log(`Your balance is $${this.balance}.`);
  }
}

const accounts = [];

function createAccount() {
  const name = readline.question("Enter your name:");
  const initialBalance =
    parseFloat(readline.question("Enter your initial balance (optional):")) ||
    0;
  const account = new BankAccount(name, initialBalance);
  accounts.push(account);
  console.log(`Account created for ${name}.`);
  account.viewBalance();
}

function selectAccount() {
  const name = readline.question("Enter your name:");
  const account = accounts.find((account) => account.name === name);
  if (!account) {
    console.log(`No account found for ${name}.`);
    return null;
  }
  return account;
}

function deposit() {
  const account = selectAccount();
  if (!account) return;
  const amount = parseFloat(readline.question("Enter amount to deposit:"));
  account.deposit(amount);
}

function withdraw() {
  const account = selectAccount();
  if (!account) return;
  const amount = parseFloat(readline.question("Enter amount to withdraw:"));
  account.withdraw(amount);
}

function viewBalance() {
  const account = selectAccount();
  if (!account) return;
  account.viewBalance();
}

function main() {
  while (true) {
    const choice = parseInt(
      readline.question(
        "Enter your choice:\n1. Create account\n2. Deposit\n3. Withdraw\n4. View balance\n5. Exit"
      )
    );
    switch (choice) {
      case 1:
        createAccount();
        break;
      case 2:
        deposit();
        break;
      case 3:
        withdraw();
        break;
      case 4:
        viewBalance();
        break;
      case 5:
        console.log("Exiting...");
        return;
      default:
        console.log("Invalid choice. Please enter a number between 1 and 5.");
    }
  }
}

main();
