//Sum of Digits
let input:number=23;
let sum:number=0;
let t:number;

while(input!==0)
{
  t=input%10;
  sum=sum+t;
  input=input/10;
}
console.log(sum);
