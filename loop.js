// 1.Convert Age to Days

function calcAge(year, month, day) {
    const now = new Date();
    let age = now.getFullYear() - year;
    const dif = now.getMonth() - month + 1;
    if (dif < 0) {
        age;
    }
    else if (dif === 0) {
        var ddif = now.getDate() - day;
    }
    return age;
}
 console.log(calcAge(65));
 console.log(calcAge(0));
console.log(calcAge(20)); 

// // 2.Loop text
// example 1
 let firstName="Front-end Developer"
 for (let i=0 ; i<firstName.length ; i++){
    for (let j=0 ; j<=i ; j++){
       document.write(firstName[j]); 
    }
    document.write("<br>");
}
// example 2
const frontEnd = ['F', 'Fr', 'Fro', 'fron', 'Front','Front-','Front-e','Front-en','Front-end','Front-end ','Front-end D','Front-end De ','Front-end Dev','Front-end Deve','Front-end Devel','Front-end Develo','Front-end Develop','Front-end Develope','Front-end Developer']
for (const i of frontEnd) {
    console.log(i)
}

// 3.Sum of even numbers(e.g: 2,4,6...) in 10.
function sum_even_10() {
    let sum = 0;
    let  i=0
    while(i<10){
        if(i%2===0){
            sum = sum+i;
        }
        i++;
    }
    return sum; 
}
console.log(sum_even_10());
   
 //  4.Multiply the odd numbers(e.g: 1,3,5...) in 17.
    //     function multiplyOdd() {
    //         let multiply = 0 ;
    //         let a = 0
    //         while(a<17){
    //             if(a%2===1){
    //                 multiply = multiply*a;

    //             }
    //             a++; 
    //         }
    //         return multiply;
    //     }
    //  console.log(multiplyOdd());
     
     //  5.Multiply numbers between 10 and 18.
     function multiply() {
         let multip = 0 ;
         let b = 0
         while(10<b<18){
             if{
                 multip = multip*b;

             }
             b++; 
         }
         return multiply;
     }
  console.log(multiply());

   