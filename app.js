class Person{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    static create(str){
        let person = JSON.parse(str)
        return new Person(person.name,person.email)
    }
}
let str = '{"name":"Rafe Uddaraj", "email": "rafeuddaraj2@gmail.com"}'
console.log(Person.create(str));