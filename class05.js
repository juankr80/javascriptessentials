console.log("------Object");

const name = "Alice";
const age = 30;

const user = {name, age, role: 'Qa'};

console.log( user );
console.log( user.name );

const userCaracteres = { name, 'a ño':2026};
console.log(userCaracteres["a ño"]);

const field = 'email';

const profile = {
    name: 'Bob',
    [field]: 'bod@example.com',
    [`${field}Verified`]: true,
}

console.log(profile.email);
console.log(profile.emailVerified);

const userFn = {
    name: 'Bob',
    saludar () {
        return `Hola soy ${this.name}`;
    }
}

console.log(userFn.name); 
console.log(userFn.saludar());


console.log("----------Destructing");
const userd = {"name_d": 'Bob', "age_d": 38, role: 'Qa'};

const { name_d : name_d2, age_d, isAdmin = false} = userd;

console.log( name_d2, age_d, isAdmin);

// Nested object destructuring
const response = {
  data: {
    user: { id: 1, name: 'Bob' },
    meta: { page: 1, total: 100 },
  },
  status: 200,
};

const {
    data: {
        user: {id, name:NameN},
        meta: {total}
    }
} = response;

console.log(`User ${id}, ${NameN}`);

const displayUser = ({ name, age = 0} ) => {
    console.log(`${name} is ${age}`)
};

displayUser({ name: 'Carol'});
