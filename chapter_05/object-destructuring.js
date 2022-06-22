function getPerson() {
    return {
        firstname: "John",
        lastname: "Doe",
        age: "20",
        email: "john@gmail.com",
    };
}

let { firstname, lastname } = getPerson();
console.log(firstname); // John
console.log(lastname); // Doe

function displayFullName({ firstname, lastname }) {
    console.log(`${firstname} ${lastname}`); // John Doe
}

displayFullName(getPerson());
