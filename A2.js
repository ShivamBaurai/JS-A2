// ans1

// function findGrades(M)
// {
//  switch(true)
//  {
//     case(M<=10):
//     return "E";
//     case(11>=M<=20):
//      return 'D';
//     case(21>=M<=30):
//     return 'C';
//     case(31>=M<=40):
//     return 'B';
//     case(41>=M<=50):
//     return 'A';
// }
// }
// console.log(findGrades(9));

// ans2
// function getValue(C) {
//     const values = {
//         'p': 'PrepBytes',
//         'P': 'PrepBytes',
//         'Z': 'Zenith',
//         'z': 'Zenith',
//         'E': 'Expert Coder',
//         'e': 'Expert Coder',
//         'D': 'Data Structure',
//         'd': 'Data Structure'
//     };

//     return values[C] || 'Invalid Value';
// }

// console.log(getValue('E'));

// ans3

// let a = parseInt(prompt("enter any number"))
// let b = parseInt(prompt("enter any number"))
// let c = parseInt(prompt("enter any number"))

// console.log(Math.max(a,b,c)+" is the greatest");

// ans4

// function find2ndsmallest(X,Y,Z)
// {
//    if(X>Y)
//    {
//     if(X>Z)
//     {
//         return Y > Z? Y:Z;
//     }
//     else
//     {
//         return X;
//     }
//    }
//    else{
//     if(Y>Z)
//     {
//         return X>Z?X:Z;
//     }
//     else{
//         return Y;
//     }
//    }
// }
// console.log(find2ndsmallest(10,15,25));

// ans5

function Triangle_check(A, B, C) {
    if (A <= 90 && B <= 90 && C <= 90)
        return 'acute';
    else if (A > 90 || B > 90 || C > 90)
        return 'obtuse';
    else
        return 'invalid';
}
console.log(Triangle_check(60, 60, 60));
