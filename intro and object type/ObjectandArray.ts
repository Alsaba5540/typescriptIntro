let cl = console.log;

type personObj = {
    fname: string,
    lname : string ,                                                                                     
    age : number,
    skills : string[]
}
let person : personObj = {
    fname: "jhon",
    lname : "Doe",
    age : 22,
    skills : ["HTML", "CSS" ," JAVASCRIPT" , "TYPESCRIPT" , " ANGULAR"]

}

// person ={
//     fname: "Saba",
//     lname : "Shaikh",
//     age : 22
// } 

cl(person)



type personObj1 = {

    fname : string,
    lname : string,
    age : number,
    skills : string[]
 
}

let person1 : personObj1 = {
    fname : "Alsaba",
    lname : "Firoz",
    age :  22,
    skills : ["Reading" , " Writing" , " Honest"]
}

cl(person1)


// working with number , boolean , and string

// num1 = document.getElementById("num1") as HTMLInputElement;
// const num2 = document.getElementById("num2") as HTMLInputElement;
//const add = document.getElementById("add") as HTMLElement;



function addition(n1:number , n2:number , showResult:boolean , pharse : string){
    if(showResult){
        cl(`${pharse}${n1 + n2 }`)
    }else{
        return `${pharse}${n1 + n2 }`
    }

}

let n1 = 10;
let n2 = 20;

cl(addition(n1 ,n2, true , "Show the value "))

