const fs=require("fs");
const path=require("path");
const readline=require("readline");


const a= path.join(__dirname,'user.json');

const re=readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let user={
    name: "",
    age: ""
}


re.question("whats your name ? " , (answer) =>{
    console.log(answer);
    user.name=answer;
re.question("whats your age ? " , (answer) =>{
    console.log(answer);
    user.age=answer;

    fs.writeFileSync(a,JSON.stringify(user));

re.close();
let data = fs.readFileSync(a,"utf8");
console.log(data);

});


});