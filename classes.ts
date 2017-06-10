
//Classes ! are blueprint
//the name of class is always in Capitalize and instance of classes are always in camelCase
// class Human{} syntax
class Human {
    name: string
    fName: string
    lName: string
    age: number
    constructor(fName:string, lName:string){
        //constructor always execute automatically when the class's instance is created the constructor called
        console.log('This is class')
        this.eat();
        this.setName(fName,lName);
        // this.name = name //This can also be use when setName  func is not created

    }
    //All Are Customize Functions
    eat(){
        console.log('Can eat')
    }
    getAge(){

    }
    setName(fName: string, lName: string){
        this.fName = fName
        this.lName = lName
    }
    getFullName() : string{
        let firstLastName = `${this.fName}  ${this.lName}`;
        return firstLastName
    }
}
  
const h = new Human('Furqan','Khanzada');
console.log('Full Name : ', h.getFullName());
//h.eat()
