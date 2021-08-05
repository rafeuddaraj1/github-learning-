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
        return 'Dhaka Bangladesh'
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

function any (){
    this.name = 'rafe'
}

any.prototype.common = function(){
    console.log(this);
}

let an = new any()
an.common()

function toDo(){
    this.mail = 'aan76608@gmail.com'
}

toDo.prototype = Object.create(any.prototype)

let to = new toDo()

to.common()

function log(){
    return 'i am console.log() method and keywords'
}