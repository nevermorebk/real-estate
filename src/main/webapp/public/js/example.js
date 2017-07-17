ReactDOM.render(<h1 className="mauvang">REACTJS for Myseft</h1>, document.getElementById('root'));

/*
function Person(name, age) {
    this.age = age;
    this.name = name;
}

var person1 = new Person("quang", 23);
console.log(person1);*/

class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    sayHello(){
        return 'Xin chao, toi la '+ this.name+ ', ' + this.age
    }

}

class Child extends Person{
    constructor(name, age, hooby){
        super(name, age);
        this.hobby = hooby;
    }

    sayHello(){
        return 'Xin chao, em la ' + this.name;
    }
}

var person2 = new Person("Teo", 12);
var aChild = new Child('aaaa', 3);
console.log(aChild);
console.log(aChild.sayHello());
console.log(person2);
console.log(person2.sayHello());