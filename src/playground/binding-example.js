
class OldSyntax {
    constructor() {
        this.name = "Mike";
        //Binding manually in the constructor
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        return `Hi. My name is ${this.name}`
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//_____________________________

class NewSyntax {
    name = 'Jen';
    //Can't bind their this value. Use whatever "this" is in scope i.e the class instance itself
    getGreeting = () => {
        return `Hi. My name is ${this.name}`
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());