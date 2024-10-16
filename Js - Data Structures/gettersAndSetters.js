const person ={
    firstName : 'Rufus',
    secondName : 'David',
    get fullName(){
        return `$(person.firstName) $(person.secondName)`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.secondName = parts[1];
    }

};

person.fullName = 'Clement David';

console.log(person);