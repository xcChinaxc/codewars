/* Filter out the geese */

// P - array
// R - filtered array
// E - gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]
// P - filter any word that is not included in geese array

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter(word => !geese.includes(word))
}