class Bank {
    constructor(public bankName: string) {}
}
class SBI extends Bank {
    constructor(bankName: string) {
        super(bankName);
    }
}
class HDFC extends Bank {
    constructor(bankName: string) {
        super(bankName);
    }
}
class Customer extends SBI {
    constructor(bankName: string, public customerName: string) {
        super(bankName);
    }
    display(): void {
        console.log("Bank: " + this.bankName);
        console.log("Customer: " + this.customerName);
    }
}
const customer = new Customer("SBI", "Kate");
customer.display();

const hdfc = new HDFC("HDFC");
console.log("Bank: " + hdfc.bankName);