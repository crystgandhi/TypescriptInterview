class Bank {
    constructor(public bankName: string) {
    }
   getBankName():string{
        return this.bankName;
    }
}
class SBI extends Bank {
    constructor(private amount: number) {
        super('SBI');
    }
    calculateInterest(): number {
        return this.amount * 0.9;
    }
}
class HDFC extends Bank {
    constructor(private amount: number) {
        super('HDFC');
    }
    calculateInterest(): number {
        return this.amount * 0.65;
    }
}
const sbi = new SBI(7890);
console.log(sbi.getBankName());
console.log(sbi.calculateInterest());
const hdfc = new HDFC(9874);
console.log(hdfc.getBankName());
console.log(hdfc.calculateInterest());