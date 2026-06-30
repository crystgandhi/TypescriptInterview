class Account{
   public balance:number=34340;
    constructor(public accountHolderName:string){
    }
    getCustomerDetails(){
        console.log(this.accountHolderName);
        console.log(this.balance);
    }
}
const acc=new Account("Nick");
acc.getCustomerDetails();
