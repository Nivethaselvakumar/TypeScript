//reversal of a number
let rev:number=0;
let n:number=25, temp:number,t:number;
temp=n;
while(temp!=0)
{
  t=temp%10;
  rev=rev*10+t;
  temp=temp/10;
}
console.log(rev);
