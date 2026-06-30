//hybrid
class Bank {
    constructor(public bankName: string) { }
    getBankName(): void {
        console.log(this.bankName);
    }
}
class SBI extends Bank {
    constructor(bankName: string, public amount: number) {
        super(bankName)
    }
    calculateInterest(): number {
        const interest = this.amount * 0.06
        return interest;
    }
}
class HDFC extends Bank {
    constructor(bankName: string, public amount: number) {
        super(bankName)
    }
    calculateInterest(): number {
        return this.amount * 0.045;
    }
}
class Customer extends SBI {
    constructor(bankName: string, amount: number, public customerName: string) {
        super(bankName, amount);
    }
    getCustomerDetails(): void {
        const balance = this.amount + super.calculateInterest();
        console.log(this.customerName, balance);
    }
}
const details = new Customer("SBI", 10000, "JOhn");
details.getBankName();
console.log(details.calculateInterest());
details.getCustomerDetails();
