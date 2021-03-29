const firstName = 'Paul';
const lastName = 'Quirie';
const age = 42;
const hasPets = true;
const email = 'paq79@hotmail.com';
const yearOfBirth = 2021 - age

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof age);
console.log(typeof hasPets);
console.log(typeof email);



const message = `Hello my name is ${firstName} ${lastName} and I'm ${age} years old.`;
const initials = firstName.charAt(0) + lastName.charAt(0);
const fullName = firstName + " " + lastName
const birthdayInfo = `My name is ${fullName} and I was born in ${yearOfBirth}.`
const petInfo = hasPets ? `My cats name is Loki` : `I don't have any pets`

console.log(petInfo)
