const b=[];
const test =async()=> {
    
let a= fetch('https://jsonplaceholder.typicode.com/photos').then((a)=>{
    return a.json()
}) .then((a)=>{
   b=a;
}).catch((error) => {

console.log("error");
})
};

test();