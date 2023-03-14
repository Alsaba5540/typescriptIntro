// working with number , boolean , and string
var cl = console.log;
function add(n1, n2, showResult, pharse) {
     if(showResult){
       cl(`${pharse} ${n1+n2}`)
    }else{
       return `${pharse} ${n1+n2}`
    }
    return showResult ? cl("".concat(pharse, " ").concat(n1 + n2)) : "".concat(pharse, " ").concat(n1 + n2);
}
var n1 = 10;
var n2 = 10;
//cl(add(n1 , n2 , true , " The addition is "))
cl(add(n1, n2, false, "the addition is "));
