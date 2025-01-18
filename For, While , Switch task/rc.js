// Tapşırıq 1
// let num1 = Number(prompt('1-ci ədədi daxil et: '));
// let num2 = Number(prompt('2-ci ədədi daxil et: '));
// let num3 = Number(prompt('3-cü ədədi daxil et: '));

// if (num1 >= num2 && num1 >= num3) {
//     alert("num1 ən böyükdür");
// } else if (num2 >= num1 && num2 >= num3) {
//     alert("num2 ən böyükdür");
// } else if (num3 >= num1 && num3 >= num2) {
//     alert("num3 ən böyükdür");
// } else {
//     alert("Bilinməyən xəta");
// }


// Tapşırıq 2: Artıq İl Yoxlamaq
// let year=Number(prompt("Il daxil edin:" ))
// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     alert("Artiq il");
// }
// else{
//     alert("Artiq il deyil")
// }


// Tapşırıq 3: Qiymətləndirmə Sistemi

// let score = Number(prompt("Tələbənin balini daxil edin:"));
// switch (true) {
//     case (score >= 90):
//         alert(" A");
//         break;
//     case (score >= 80):
//         alert(" B");
//         break;
//     case (score >= 70):
//         alert(" C");
//         break;
//     case (score >= 60):
//         alert("D");
//         break;
//     case (score < 60):
//         alert("F");
//         break;
//     default:
//         alert("Düzgün bal daxil edin!");
//         break;
// }


// Tapşırıq 4: Tək və ya Cüt
// let number = Number(prompt(" ədəd daxil edin:"));
// switch (number % 2) {
//     case 0:
//         alert("cütdür");
//         break;
//     case 1:
//     case -1:
//         alert("təkdir");
//         break;
//     default:
//         alert("Düzgün ədəd daxil edin!");
//         break;
// }


// Tapşırıq 5: FizzBuzz Problem
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// Tapşırıq 6: Vurma Cədvəli
// let number = Number(prompt("ədəd daxil edin:"));
// if (!isNaN(number)) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// } else {
//     console.log("Duzgun daxil edin");
// }


// Tapşırıq 7:
// let number = Number(prompt("təbii ədəd daxil edin:"));

// if (!isNaN(number) && number > 0) {
//     let sum = 0; 
//     for (let i = 1; i <= number; i++) {
//         sum += i; 
//     }
//     console.log(`1-dən ${number}-ə qədər olan təbii ədədlərin cəmi: ${sum}`);
// } else {
//     console.log("Zəhmət olmasa müsbət bir təbii ədəd daxil edin.");
// }


// Tapşırıq 8:
// let num1=Number(prompt("1-ci Ededi daxil edin:"))
// let num2=Number(prompt("2-ci Ededi daxil edin"))
// let operation=prompt("Birini daxil et(+,-,*,/)")

// switch(operation){
//     case"+":
//     console.log(`${num1}+${num2}=${num1+num2}`);
//     break;
//     case"-":
//     console.log(`${num1}-${num2}=${num1-num2}`);
//     break;
//     case"*":
//     console.log(`${num1}*${num2}=${num1*num2}`);
//     break;
//     case"/":
//     console.log(`${num1}/${num2}=${num1/num2}`);
//     break;
//     default:
//         console.log("emeliyyati duzgun daxil edin (+,-,*,/)");
        
// }



