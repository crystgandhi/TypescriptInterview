let num: number = 7865;
let reversedNum: number = 0;

while (num!= 0) {
    let remainder: number = num % 10;
    reversedNum = reversedNum * 10 + remainder;
    num = Math.floor(num / 10);
}

console.log(reversedNum);