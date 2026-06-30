//constructor
class BankAccount {
  private balance: number=0
  constructor(private amount: number, private withdrawAmount: number) {
  }
  deposit(): number {
    return this.amount;
  }
  withdraw(): void {
    if (this.withdrawAmount <= this.amount) {
      console.log('Withdrw success');
    }
    else {
      console.log('Withdraw is not success')
    }
  }
  getbalance(): number {
    return this.amount - this.withdrawAmount;
  }
}
const amountcalcualte=new BankAccount(5000, 2908);
amountcalcualte.deposit();
amountcalcualte.getbalance();
amountcalcualte.withdraw();