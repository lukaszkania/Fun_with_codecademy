// returns any given night’s number of hours of rest. (one for each day of the week)
const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
        case "monday":
            return 5
        case "tuesday":
            return 8
        case "wednesday":
            return 7
        case "thursday":
            return 7
        case "friday":
            return 6
        case "saturday":
            return 8
        case "sunday":
            return 8
        default:
            console.log("Error")
            return null
    }
}

// Get the total sleep hours that you actually slept
const getActualSleepHours = () => {
    const daysOfWeek = ['monday', "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    let hoursOfSleep = 0
    for (let i = 0; i < daysOfWeek.length; i++) {
        hoursOfSleep += getSleepHours(daysOfWeek[i])
    }
    return hoursOfSleep
}

//  Get the ideal sleep hours that you prefer
const getIdealSleepHours = (hoursPerNight) => {
    return hoursPerNight * 7 // Total hours you prefer per week.
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours(7)
    if (actualSleepHours === idealSleepHours) {
        console.log("You got the perfect amount of sleep.")
    } else if (actualSleepHours > idealSleepHours) {
        const diffInHours = actualSleepHours - idealSleepHours
        console.log("You got more sleep than needed. It is: " + diffInHours + "h to much.")
    } else {
        const diffInHours = idealSleepHours - actualSleepHours
        console.log("You should get some rest. You sleep: " + diffInHours + "h to little.")
    }
}

// Test code.
calculateSleepDebt()
