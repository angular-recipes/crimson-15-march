import { Human, hasSpeak } from './interfaces';

class Person implements hasSpeak{
    name: string;
    age: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
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
    name: 'David Boon',
    age: 21,
    introduce: () => {
        console.log(`Hello I am ${this.name} and ${this.age} years old`);
    }
};
