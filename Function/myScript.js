// // 3. Cüt və ya tək ədəd
// function isEven(Number) {
//   return(Number%2===0);  
// }
// console.log(isEven(4));
// console.log(isEven(7));



// // 4. Ən böyük ədədi tapın
// function findLargest(a,b,c) {
//     let largest=a

//     if (b>largest) {
//         largest=b;
//     }
//     if (c>largest) {
//         largest=c;
//     }
//     return largest;
// }
// console.log(findLargest(10,20,15));



// 5. Saitləri sayı
// function countVowels(str) {
//     const vovels="aıoueəiöüAIOUEƏİÖÜ"
//     let list=str.split("")
//     let ivolves=vovels.split("")
//     let count=0
//     for (let i = 0; i < list.length; i++) {
//         for (let index = 0; index < ivolves.length; index++) {
            
            
//             if (list[i]==ivolves[index]) {
//                 count=count+1
//             }
//     }

// }
// console.log(count);

// }
// console.log(countVowels("Salam"));



// Sətiri tərsinə çevirin
function reverseString(str) {
    let list = str.split("");
    let reverseArray = [];
    let reverseWord = ''; 
    for (let index = list.length - 1; index >= 0; index--) {
        reverseArray.push(list[index]);
    }
    reverseWord = reverseArray.join(""); 
    console.log(reverseWord);
}

reverseString("Javascript");
