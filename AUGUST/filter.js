// 1. Отфильтровать массив слов и выбрать несколько имен по длине
// 2. Отфильтровать массив строк и оставить только те, которые содержат определенное слово.
// 3. Отфильтровать массив объектов и оставить только те объекты, у которых значение определенного свойства больше заданного числа.


// 1 task

const cat = ['Ricky', 'David', 'Wermont', 'Pumpy']
const result = cat.filter((word) => word.length > 5);
// console.log(result); 
// the right answer is 'Wermont'

// 2 task 
const dog = ['Dora', 'Berri', 'Almond', 'Patrick', 'Samp', 'Sandy']
const enterWord = dog.filter((word) => word === 'Almond' || word.length > 6);
// console.log (enterWord)
// the right answer is 'Almond', 'Patrick'

// 3 task 

const books = [
    {
        name : 'Sonny',
        date : 1973,
        color : 'Green book'
    },

    {
        name : 'Alid in the forest',
        date : 2012,
        color : "White book"
    }
   
]
const result1 = books.filter(book => book.date > 2000)
console.log(result1);