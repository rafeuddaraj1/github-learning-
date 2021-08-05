class Person{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    display(){
        return `I am display???`
    }
}

let person = new Person()
console.log(person.display());
