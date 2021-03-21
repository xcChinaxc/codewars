/* Sum Mix Array */

function sumMix(x){
    return Number(x.reduce( (a,cV) => Number(a) + Number(cV) ));
}