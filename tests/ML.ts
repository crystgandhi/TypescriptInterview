class Bank {
    constructor(public bankName: string) {
    }
    getBankName(): void {
        console.log("Bank Name: " + this.bankName);
    }
}
class Branch extends Bank {
    constructor(bankName: string, public branchName: string) {
        super(bankName);
    }
    getBranchName(): void {
        console.log("Branch Name: " + this.branchName);
    }
}
class Customer extends Branch {
    constructor(
        bankName: string,
        branchName: string,
        public customerName: string,
        public balance: number
    ) {
        super(bankName, branchName);
    }
    getCustomerDetails(): void {
        console.log("Customer Name: " + this.customerName);
        console.log("Balance: " + this.balance);
    }
}
const customer = new Customer("SBI", "Chennai", "Kate", 10000);
customer.getBankName();
customer.getBranchName();
customer.getCustomerDetails();