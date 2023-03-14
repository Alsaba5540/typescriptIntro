let cl = console.log;

enum Role {
  Admin ="A",
 Candidate = "C",
  Super_Admin = "SA"
}

let person = {
    fname : "jhon",
    lname : "doe", 
    age : 22,
    userRole : "SA" // "C" , "A"

}

cl(Role.Admin)
cl(Role.Candidate)
cl(Role.Super_Admin)

if(person.userRole === Role.Admin){
    cl(`User Role is a Admin `)
}

if(person.userRole === Role.Candidate){
    cl(`User Role is Candidate`)

}

if(person.userRole === Role.Super_Admin){
    cl(`User Role is Super_Admin`)
}