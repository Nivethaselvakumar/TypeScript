//Display full name of a person using interface
interface Person
{
  firstName:string;
  lastName:string;
}

function fullName(person:Person)
{
  console.log(`${person.firstName} ${person.lastName}`);
}

let p=
{
firstName:'Nivetha',
lastName:'S'
};

fullName(p);
