const users = require('./task2.json');

function count(){
    let usernames = [];
    users.forEach((user) => {
        if (!usernames.includes(JSON.stringify(user))) {
            usernames.push(JSON.stringify(user));
        }
    });
    let uniqUsers = usernames.map((obj) => JSON.parse(obj));
    console.log(uniqUsers);
}

count(users);