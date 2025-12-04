// JavaScript Practice Questions
// ==============================
// كل سؤال مكتوب كتعليق، و خاّنّا مكان فارغ تكتب بيه الحل مالك :)

// 1) عرّف متغيرين a و b وخلي بيهم أرقام،
//    واكتب كود يطبع مجموعهم.
//    مثال متوقع للطباعة: Sum: 30

function summation(a,b){
return (a+b) ;
};
console.log("sum : " + summation(2,2));

// --- حل السؤال 1 هنا ---



// 2) عندك متغير minutes.
//    حوّله إلى ثواني (seconds) واطبع الناتج.
//    مثال: إذا minutes = 5 الناتج = 300
function convertMinutesToSeconds(minutes){
const convert=minutes*60
return convert
};
console.log(convertMinutesToSeconds(5))

// --- حل السؤال 2 هنا ---



// 3) اكتب دالة باسم square
//    تستقبل رقم وترجع مربع الرقم.
//    مثل: square(4) ترجع 16
// الناتج: 300

function square(x){
return x*x;
};
console.log(square(4))
// --- حل السؤال 3 هنا ---



// 4) اكتب دالة باسم maxOfTwo
//    ترجع أكبر رقم من رقمين باستخدام if.
//    مثل: maxOfTwo(8, 3) ترجع 8
// الناتج: 8

function maxOfTwo(a,b){
if (a>b){
    return a;
}
else {
    return b;
}
};
console.log(maxOfTwo(8,3));

// --- حل السؤال 4 هنا ---



// 5) اكتب دالة باسم helloName
//    تستقبل اسم وترجع نص: "Hello " مع الاسم.
//    مثل: helloName("Ali") ترجع "Hello Ali"

function helloName(name){
return ("Hello "+ name)
};
console.log(helloName("Ali"));


// --- حل السؤال 5 هنا ---



// 6) عندك متغير num 
//    اكتب كود يحدد إذا الرقم زوجي أو فردي.
//    إذا زوجي اطبع "Even" إذا فردي اطبع "Odd"


function check(num){
  if (num % 2 === 0) {
    return "Even";
  } 
  else {
    return "Odd";
  }
}
console.log(check(4)); 

// --- حل السؤال 6 هنا ---



// 7) عندك متغير grade (0 – 100).
//    إذا الدرجة >= 50 اطبع "ناجح"
//    غير ذلك اطبع "راسب"

function checkTheGrade(grade){
if (grade >=50) {
    return "ناجح";
}
else {
    return "راسب"
}
};
console.log(checkTheGrade(90));



// --- حل السؤال 7 هنا ---



// 8) عندك متغير score.
//    اكتب شروط if / else if حتى تطبع:
//    90 فما فوق  → "ممتاز"
//    75 – 89     → "جيد جدًا"
//    60 – 74     → "جيد"
//    أقل من 60   → "ضعيف"

// --- حل السؤال 8 هنا ---

function appraisalGrades(score){
if (score >= 90){
    return "ممتاز";
}
else if(score >= 75 && score <= 89) {
     return "جيد جدًا";
}
else if(score >= 60 && score <= 74) {
     return "جيد";
}
else  {
     return "ضعيف";
}
};
console.log(appraisalGrades(95));



// 9) اكتب لوب for يطبع الأرقام من 1 إلى 10
//    كل رقم بسطر واحد باستخدام console.log


function loopTest(i){
for (i=1;i<=10;i++){
    console.log(i)
}
};
loopTest();


// --- حل السؤال 9 هنا ---



// 10) اكتب لوب يحسب مجموع الأرقام من 1 إلى 100
//     خزّن الناتج في متغير total واطبعه بالنهاية





// --- حل السؤال 10 هنا ---



// 11) عندك النص التالي:
//     let text = "hello world";
//     اكتب لوب يحسب كم مرة يتكرر الحرف 'l'
//     وخزّن العدد في متغير count ثم اطبعه

// --- حل السؤال 11 هنا ---



// 12) اكتب دالة باسم countEven(n)
//     ترجع عدد الأرقام الزوجية من 1 إلى n.
//     مثال: countEven(10) ترجع 5 (2,4,6,8,10)

// --- حل السؤال 12 هنا ---



// 13) اكتب دالة باسم sumOdd(n)
//     ترجع مجموع الأرقام الفردية من 1 إلى n.
//     مثال: sumOdd(5) ترجع 9 (1 + 3 + 5)

// --- حل السؤال 13 هنا ---



// 14) اكتب دالة باسم factorial(n)
//     تحسب حاصل ضرب الأرقام من 1 إلى n.
//     مثال: factorial(5) = 1*2*3*4*5 = 120

// --- حل السؤال 14 هنا ---
