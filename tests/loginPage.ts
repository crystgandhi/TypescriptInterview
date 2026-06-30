class LoginPage{

    constructor(public browsername:string){
         }
         getBrowserName(){
            console.log(this.browsername);
         }
}
const getName=new LoginPage("chrome");
getName.getBrowserName();