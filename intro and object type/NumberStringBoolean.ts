// working with number , boolean , and string
let cl = console.log;

   
function add(n1: number , n2:number , showResult:boolean , pharse: string  ){
   // if(showResult){
   //    cl(`${pharse} ${n1+n2}`)
   // }else{
   //    return `${pharse} ${n1+n2}`
   // }
 return showResult ? cl(`${pharse} ${n1 + n2}`) : `${pharse} ${n1+n2}`


}
let n1 = 10;
let n2 = 10;

//cl(add(n1 , n2 , true , " The addition is "))

cl(add(n1 , n2 , false , "the addition is "))