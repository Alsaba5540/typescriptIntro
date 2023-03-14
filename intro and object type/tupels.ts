let cl = console.log;


// Tupels

// Fixed length array 
type person = {
    fname : string,
    lname : string, 
    age : number,
    userRole : [number , string , boolean]
}




let person : person ={
    fname : "Jhon",
    lname : " Doe",
    age : 22 ,
    userRole : [2 , "saba" , true]
}

cl(person);

type object1 ={
    fname : string,
    lname : string, 
    age : number,
    skills : string[]
}


let object2 : object1 = {
    fname : "Saba",
    lname : "Attar",
    age : 22, 
    skills : ["HTML" , "CSS" , "JS" , "TS" , "ANGULAR"]
}


object2.fname = "Mahek"

cl(object2)