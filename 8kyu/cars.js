// 1. Создайте объект "автомобиль" со свойствами "марка", 
// "модель", "год выпуска" и методом "получить возраст автомобиля". 
// Метод должен возвращать количество лет, 
// прошедших с года выпуска до текущего года.

const motoCar = {
    brand : "bentley",
    model : "GT speed",
    date : 2021,
    getDateCar() {
        // console.log(motoCar.date) looks like this;
       return this.date
    },
    getOldCar() {
        //return `${new Date().getFullYear() - this.date}`
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const result = currentYear - motoCar.getDateCar();
        return result;
    }
}

console.log(motoCar.getOldCar())



// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();

// const answer = currentYear - motoCar.getDateCar();

// console.log(answer);


