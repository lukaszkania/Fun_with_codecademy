class Media {
    constructor(title) {
        this._title = title
        this._isCheckedOut = false
        this._ratings = []
    }

    get title() {
        return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut
    }
    get ratings() {
        return this._ratings
    }

    toggleCheckOutStatus() {
        if (this._isCheckedOut) {
            this._isCheckedOut = false
        } else {
            this._isCheckedOut = true
        }
    }

    getAverageRating() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this._ratings.reduce(reducer) / this._ratings.length
    }

    addRating(rate) {
        this._ratings.push(rate)
    }

    set isCheckedOut(statusOf) {
        this._isCheckedOut = statusOf
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title)
        this._author = author
        this._pages = pages
    }

    get author() {
        return this._author
    }
    get pages() {
        return this._pages
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title)
        this._director = director
        this._runTime = runTime
    }

    get director() {
        return this._director
    }
    get runTime() {
        return this._runTime
    }
}

// Testing Book class.
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

console.log(historyOfEverything.isCheckedOut)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)

console.log(historyOfEverything.ratings)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.ratings)

console.log(historyOfEverything.getAverageRating())

// Testing Movie class.
const speed = new Movie('Jan de Bont', 'Speed', 116)

console.log(speed.isCheckedOut)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)

console.log(speed.ratings)
speed.addRating(3)
speed.addRating(5)
speed.addRating(5)
console.log(speed.ratings)

console.log(speed.getAverageRating())
