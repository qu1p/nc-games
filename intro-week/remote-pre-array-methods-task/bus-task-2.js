/* Commuting to Northcoders

Pre-covid, the tutors would get the bus to northcoders.  
It was a long journey so often the tutors would shuffle around the bus to chat to each other.
Some tutors would get off (in need of a morning coffee) and walk the rest of the way, 
while other tutors would get on the bus on the way.

Using a combination of PUSH, POP, SPLICE only, make the `ncTutorBus`
resemble the `ncTutorBusAtDestination` array (printed below):

[ 'Driver', 'Foluso', 'Anat', 'Haz', 'Mitch', 'Liam'];

(Don't use mutate using the array indexes - just PUSH, POP, and SPLICE)
*/

const ncTutorBus = ['Driver', 'Izzi', 'Anat', 'Liam', 'Haz', 'Foluso'];

// <------ Write your code here ------>

// ncTutorBus.pop()
// ncTutorBus.splice(1,1,'Foluso')
// ncTutorBus.splice(3,3,'Haz', 'Mitch', 'Liam')

ncTutorBus.splice(0,6,'Driver', 'Foluso', 'Anat', 'Haz', 'Mitch', 'Liam')

console.log(ncTutorBus)


const ncTutorBusAtDestination = [
  'Driver',
  'Foluso',
  'Anat',
  'Haz',
  'Mitch',
  'Liam',
];

// These should all print true if you've managed it!
console.log(ncTutorBus[0] === ncTutorBusAtDestination[0]);
console.log(ncTutorBus[1] === ncTutorBusAtDestination[1]);
console.log(ncTutorBus[2] === ncTutorBusAtDestination[2]);
console.log(ncTutorBus[3] === ncTutorBusAtDestination[3]);
console.log(ncTutorBus[4] === ncTutorBusAtDestination[4]);
console.log(ncTutorBus[5] === ncTutorBusAtDestination[5]);
