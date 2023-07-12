// 1. Создайте объект "книга" со свойствами "название", "автор", 
// "год выпуска" и методом "получить информацию о книге". 
// Метод должен выводить в консоль информацию о книге в формате 

// "Название: [название], Автор: [автор], Год выпуска: [год выпуска]" in string format;

const book = {
    name: "Doctor Sleep",
    author: "Stephen King",
    date: 2019,
    getInfoAbout() {
        // old method
        //return 'Name: ' + this.name + ', Author: ' + this.author +  ',' + ' Year: ' + this.date
       return `Name: ${this.name}, Author: ${this.author}, Year: ${this.date}`
    },
    chapter1: {
        page: 1,
    },
    chapter2: {
        page: 34,
    }
}

console.log(book.chapter2.page)
