let name:string="Automation";
name=name.toLocaleLowerCase();
const chArray:string[]=name.split('');
const map=new Map<string, number>();

for(const ch of chArray){
    if(map.has(ch)){
      map.set(ch, (map.get(ch)??0)+1);
    }
    else{
        map.set(ch,1)
    }
}
console.log(map);
const count = map.get('a') ?? 0;
console.log(count);