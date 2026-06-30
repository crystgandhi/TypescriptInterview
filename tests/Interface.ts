interface Bank {
    bankName: string
    calculateInterest(): number;
}
class SBI implements Bank {
    constructor(public bankName: string, public amount: number) { }
    calculateInterest(): number {
        return this.amount * 0.05;
    }
}

const sbi = new SBI("SBI", 98690);
console.log(sbi.calculateInterest());

