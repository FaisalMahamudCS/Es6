const add = (num1,num2) => num1 + num2;
const multiply = (num1,num2,num3) => num1 * num2 * num3;
const result =multiply(4,12,3);
const fiveTimes=(num) => num  * 10;
const output=fiveTimes(17)
console.log(output)

const doMath = (x,y) => {
    const sum=x+y;
    const diff=x-y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const result1 =doMath(12,5);
console.log(result1);