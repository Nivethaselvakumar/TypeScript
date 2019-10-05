//leap year or not
let year:number=2020;
if(year%4===0)
{
  if(year%100===0)
  {
    if(year%400===0)
     console.log('it is a leap year');
    else
     console.log('Not a leap year');
  }
  else
    console.log('it is a leap year');
}
else
  console.log("Not a leap year")
