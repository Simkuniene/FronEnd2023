var casual = require('casual');
 
// Generate random sentence

const rand = Math.floor(Math.random() * 10) + 1 ;
 
// Generate random city name
const city = casual.city;

casual.define('user', function() {
    return {
        email: casual.email,
        firstname: casual.first_name,
        lastname: casual.last_name,
        password: casual.password
    };
});

const user = casual.user;

const name_prefix =casual.name_prefix;
const first_name =casual.first_name;
const last_name =casual.last_name;

const rand1 = casual.integer(from = 5, to = 10);

console.log(user);
console.log(rand1);
