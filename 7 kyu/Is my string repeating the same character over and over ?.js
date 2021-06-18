/* 
Is my string repeating the same character over and over ?
Write a function hasOneChar returning:
    - true if the given string contains the same character repeated all along the string
    - false otherwise.
 */

function hasOneChar(s) {
    return s.split("").findIndex(el => el != s.charAt(0)) > -1 ? false : true
}