import { Human, hasSpeak, hasAdd } from './interfaces';

class Person implements hasSpeak, hasAdd{
    name: string;
    age: number;
    n: number

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    add(n1, n2) {
        return n1+n2;
    }

    speak() {

    }

    introduce() {
        console.log(`Hello I am ${this.name} and ${this.age} years old`);
    }
}

let sam = new Person('Sam Dsouza', 23);
sam.introduce();

//Creating objects directly
let david : Human = {
    id: 1,
    name: 'David Boon',
    age: 21,
    introduce: function() {
        console.log(`Hello I am ${this.name} and ${this.age} years old`);
    }
};

david.introduce();
