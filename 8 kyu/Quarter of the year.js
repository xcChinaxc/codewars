/* Quarter of the year */

/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. */

// Attempt Two
const quarterOf = (month) => {
    return Math.ceil(month / 3)
}

// Attempt One
const quarterOf = (month) => {
    let quarters = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]],
        newArr = []
    quarters.forEach(el => newArr.push(el.includes(month)))
    return newArr.indexOf(true) +1
}