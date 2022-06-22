import {users} from './task1.mjs';

const registration = (date1, date2) => {
    for (let i = 0; i < (users.length); i++) {
        if (users[i].registrationDate == date1 || users[i].registrationDate ==date2){
            console.log(users[i]);
        } else {

        }
    }

}
registration('09.10.2021', '10.10.2021')