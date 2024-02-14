// // 1. Создать новый массив, в котором будут храниться квадраты чисел из исходного массива.

// // task 1

// const number = [1,2,3,4]
// const newNumber = number.map(num => num ** 2)
// // console.log(newNumber);
// // right answer is [ 1, 4, 9, 16 ]

// // 2. Создать новый массив, в котором будут храниться только те объекты из исходного массива, у которых свойство "age" больше 18.
// // task 2

// const users = [
//     {
//         name: 'Amanda',
//         id : 0,
//         age: 17
//     },

//     {
//         name: 'Lusi',
//         id : 1,
//         age: 66
//     },

//     {
//         name: 'Rob',
//         id : 2,
//         age: 18
//     }
// ]
// const adults = users.filter(user => user.age > 18)
// console.log(adults);

// // 3. Создать новый массив, в котором будут храниться только те объекты из исходного массива, у которых свойство "name" начинается с буквы "а".
// // const nameA = [{name : arab, name: Mark, name : Amanda} ]
// // const newName = nameA.map(obj => obj.name.charAt(0) === "a")
// // console.log(newName);

// // 4. Каждому пользователю добавить св-во pension 'Нужно ли ему на пенсию'
// const pension = users.map(user => {
//     if (user.age > 65){
//         return {...user, pension: true}
//     } else {
//         return {...user, pension: false}
//     }

// })
// console.log(pension);

// 1 задача 

const array = [2, 3, 4, 5, 6]

let newArray = array.map(function(element){
    return element * 2
})
// console.log(newArray);

// 2 задача
const letters = ['a', 'b', 'c', 'd']

let newLet = letters.map(letter => letter.toUpperCase())
     
// console.log(newLet);

// 3 задача
const users = [
    {name: 'Alisa', id: 0},
    {name: 'Rob', id: 1},
    {name: 'Olivia', id: 2},
]
let newSt = users.map(user =>{ 
    return {...user,status: 'Student'}
})

console.log(newSt);

