const test =async()=> {
    try{
let a=await fetch('https://jsonplaceholder.typicode.com/photos');
let b=await a.json();
console.log(b);
    }
    catch(error){
console.log("error");

    }
};

test();