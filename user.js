const fs = require('fs');
const path = require('path');
const readline = require('readline');

const FILE_PATH = path.join(__dirname, 'user.json');

const re = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let user = {
    name: '',
    age: 0
}

if(fs.existsSync(FILE_PATH)) {
    const savedUser = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
    
    if(savedUser.name) {
        user.name = savedUser.name;
        
    }
    if(savedUser.age) {
        user.age = savedUser.age
    }
}

const menu = () => {
    console.log(`
        ================================ 
        1) for changing the name 
        2) for changing the age 
        3) for printing the user data 
        4) for saving the user data
        0) for exit
        ==================================
        `);
    
        re.question("chose: ", (answer) => {
            if(answer == 1) { 
                re.question('Enter you name: ', (name) => {
                    if(name.trim() === '') {
                        console.log(`you didn't add a name`);
                        
                    } else {
                        user.name = name.trim();
                    }
                    menu();
                })
            }else if(answer == 2){
                re.question('Enter you age: ', (age) => {
                    
                    user.age = +age;
                    menu();
                })
            }else if (answer == 3) {
                console.log(`
                    your name is: ${user.name === ''? '(not exist)': user.name}
                    your age is: ${user.age === 0? '(not exist)': user.age}`);
                    menu()
            }else if (answer == 4) {
                fs.writeFileSync(FILE_PATH, JSON.stringify(user));
                menu()
            }
            else if(answer == 0) {
                re.close();
            } else {
                console.log('the chose is not exist')
                menu()
            }
        })
}

menu();