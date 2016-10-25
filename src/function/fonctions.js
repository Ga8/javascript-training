var x = [0, 3, 5, 6, 21, 5, 5, 2, 25, 5, 2, 2, 1, 338, 554, 36, 32, 666];

var sortFunction = function (a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
};

x.sort(sortFunction);

console.log(x);

var users = require("../data").users;
console.log("users", users);

function sortUsers(user1, user2){
    if(user1.name === user2.name){
        return 0;
    }
    return user1.name < user2.name ? -1 :1 ;
}

users.sort(sortUsers);
console.log(users);
console.log("users", users.map(user => user.name));