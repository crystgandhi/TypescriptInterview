abstract class Bank {
    constructor(public bankName: string) {
    }
    abstract calculateInterest(): number;
    getBankName(): string {
        return this.bankName;
    }
}
class SBI extends Bank {
    constructor(bankName: string, public amount: number) {
        super(bankName)
    }
    calculateInterest(): number {
        return this.amount * 0.056;
    }
}
const sbi = new SBI("SBI", 87767);
console.log(sbi.getBankName());
console.log(sbi.calculateInterest());
