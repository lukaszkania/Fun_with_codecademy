const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers
    },
    get mains() {
        return this._courses.mains
    },
    get desserts() {
        return this._courses.desserts
    },
    set appetizers(appetizerIn) {
        this._courses.appetizers = appetizerIn
    },
    set mains(mainIn) {
        this._courses.mains = mainIn
    },
    set desserts(dessertIn) {
        this._courses.desserts = dessertIn
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            dishName,
            dishPrice,
        }
        return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName]
        const index = Math.floor(Math.random() * dishes.length)
        return dishes[index]
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse("appetizers")
        const main = this.getRandomDishFromCourse("mains")
        const dessert = this.getRandomDishFromCourse("desserts")
        const totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice
        return `Your order: \nAppetizer: ${appetizer.dishName}, \n Main: ${main.dishName}, \n Dessert: ${dessert.dishName}, \n That will be: ${totalPrice}$`
    }
}
//  Adding some meals to our menu.
menu.addDishToCourse("appetizers", "Puff Pastry Sausage Rolls", 5)
menu.addDishToCourse("appetizers", "Sausage-Stuffed Piglet Buns", 4)
menu.addDishToCourse("appetizers", "Easy Baked Shrimp Toast", 6)
menu.addDishToCourse("mains", "Perfect Lemon Curd", 25)
menu.addDishToCourse("mains", "Chef John's Chicken Tikka Masala", 30)
menu.addDishToCourse("mains", "Cauliflower Cheese", 27)
menu.addDishToCourse("desserts", "Pineapple upside-down cake", 8)
menu.addDishToCourse("desserts", "Sticky toffee pudding", 10)
menu.addDishToCourse("desserts", "Rice pudding", 6)

// Testing result.
const meal = menu.generateRandomMeal()
console.log(meal)