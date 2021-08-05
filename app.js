class Person{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    static create(str){
        let person = JSON.parse(str)
        return new Person(person.name,person.email)
    }
    address(){
        city: 'dhaka'
        country:' bangladesh'
    }
    sqr(x){
        return x*x
    }
}
let str = '{"name":"Rafe Uddaraj", "email": "rafeuddaraj2@gmail.com"}'
console.log(Person.create(str));
let person = new Person()
console.log(person.address());
console.log(new Person().sqr(10));