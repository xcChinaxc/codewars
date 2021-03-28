/* Convert number to reversed array of digits */

function digitize(n) {
    return n.toString().split("").reverse().map(x => Number(x))
}