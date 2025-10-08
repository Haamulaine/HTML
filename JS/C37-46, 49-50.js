let person = { name: "Anna", age: 30};

console.log(person.name);
person.city = "Helsinki";
delete person.age;

console.log("name" in person);
for(let key in person) {
    console.log(key + ": " + person[key]);
    let copy = { ...person };
}

let address = {street: "Katu1", zip "00100" };
let fullInfo = { ...person, ...address };

let user = {
    name: "Mikko"
    address: {
        city: "Espoo"
        zip: "00100"
    }
};

console.log(user.address.zip);