/* Slaphead

Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:
0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"
*/

function bald(x){
  let hairs = 0,
      hair = x.match(/[/]/gi),
      newX = x.replace(/[/]/gi,'-')
  
x.includes("/") ? hairs = hair.length : hairs = 0;
  
  switch(hairs){
      case 0: return [newX, 'Clean!']; break;
      case 1: return [newX, 'Unicorn!']; break;
      case 2: return [newX, 'Homer!']; break;
      case 3: return [newX, 'Careless!']; break;
      case 4: return [newX, 'Careless!']; break;
      case 5: return [newX, 'Careless!']; break;
      default: return [newX, 'Hobo!']; break;
  }
}