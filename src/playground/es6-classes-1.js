class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return`Hi. I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`
        }
        return description;
    }

}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location
    }

    hasLocation(){
        return !!this.location;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasLocation()){
            greeting += ` I am visiting from ${this.location}.`
        }
        return greeting;
    }

}

const me = new Traveler('Kanke Ishaku', 31, 'London');
console.log(me)
console.log(me.getGreeting())
console.log(me.getDescription())

const other = new Traveler();
console.log(other)
console.log(other.getGreeting())
console.log(other.getDescription())