/* Add Length */

function addLength(str) {
    return str.split(' ').map( x => x + ' ' + x.length );
}