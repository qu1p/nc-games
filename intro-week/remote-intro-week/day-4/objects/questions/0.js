const phoneBook = {
  anat: "+44981513462",
  sam: "+44981513419",
  shaq: "+4498674321",
};

const name = "anat";
const anatPhoneNo = phoneBook[name]

console.log(anatPhoneNo);

// What will happen when this file is executed with NodeJS ?
//undefined will be returned


// What is the problem with this code ?
//variable anatPhoneNo should be declared as phonebook[name]
