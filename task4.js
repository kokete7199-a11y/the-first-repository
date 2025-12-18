async function getdata(){
    try{
        console.log("جاري التحميل...")

        setTimeout(() => {
            console.log("يرجى الانتظار...")
        }, 3000);

        let res=await fetch("https://jsonplaceholder.typicode.com/todos");
        let todosData=await res.json();
        console.log("تم تحميل البيانات بنجاح",todosData);
        runAllFunctions(todosData);
    }

    catch(error){
        console.log("خطا في تحميل البيانات",error);
    }
}

getdata();

function getAllItems(data) {
    return data;
}


function getItemById(data, id) {
return data.find(item => item.id === id);
}

function getItemsCount(data) {
return data.length;
}

function getMappedValues(data) {
return data.map(item => item.title);
}

function getFilteredItems(data) {
return data.filter(item => item.completed === true);
}

function hasAnyMatchingItem(data) {
return data.some(item => item.completed === true);
}

function areAllItemsMatching(data) {
return data.every(item => item.completed === true);
}

function getSortedItems(data) {
return [...data].sort((a, b) => a.id - b.id);
}

function getReducedValue(data) {
return data.reduce((count, item) => {
return item.completed ? count + 1 : count;
}, 0);
}

function getModifiedItems(data) {
return data.map(item => ({
...item,
title: item.title.toUpperCase()
}));
}


function runAllFunctions(data) {
console.log("1 getAllItems:", getAllItems(data));
console.log("2 getItemById (id=5):", getItemById(data, 5));
console.log("3 getItemsCount:", getItemsCount(data));
console.log("4 getMappedValues:", getMappedValues(data));
console.log("5 getFilteredItems:", getFilteredItems(data));
console.log("6 hasAnyMatchingItem:", hasAnyMatchingItem(data));
console.log("7 areAllItemsMatching:", areAllItemsMatching(data));
console.log("8 getSortedItems:", getSortedItems(data));
console.log("9 getReducedValue:", getReducedValue(data));
console.log("10 getModifiedItems:", getModifiedItems(data));
};