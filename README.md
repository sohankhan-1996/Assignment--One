Question-1 Example of Unioun and Intersaction

Union:A union type allows a value to be one of several types.

Example:
type Status = "success" | "error";

function printStatus(status: Status) {
  if (status === "success") {
    console.log("Operation completed successfully.");
  } else {
    console.log("An error occurred.");
  }
}

printStatus("success");
printStatus("error");


Intersaction:An intersection type combines multiple types into one type containing all properties.

Example:
type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

const person: Person = {
  name: "Alice",
  age: 30
};



Question -2 what is the use of typeof and give an example below:

Typeof:The keyof keyword in TypeScript is used to create a union type of all the keys of an object type.

Example:

type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = keyof Person;

function getValue(obj: Person, key: PersonKeys) {
  return obj[key];
}

const p: Person = { name: "John", age: 25, email: "john@example.com" };

//console.log(getValue(p, "name")); 
//console.log(getValue(p, "age"));  



