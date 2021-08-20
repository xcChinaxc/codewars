/* Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
- domainName("http://github.com/carbonfive/raygun") == "github" 
- domainName("http://www.zombie-bites.com") == "zombie-bites"
- domainName("https://www.cnet.com") == "cnet"
*/

function solution(number){
  let arr = []
  for(let i=1; i < number; i++){
    if(i % 3 == 0 || i % 5 == 0){arr.push(i)}
  }
  return arr.reduce((a,b) => a+b, 0)
}