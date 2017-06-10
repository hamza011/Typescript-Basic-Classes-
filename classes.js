//Classes ! are blueprint
//the name of class is always in Capitalize and instance of classes are always in camelCase
// class Human{} syntax
var Human = (function () {
    function Human(fName, lName) {
        //constructor always execute automatically when the class's instance is created the constructor called
        console.log('This is class');
        this.eat();
        this.setName(fName, lName);
        // this.name = name //This can also be use when setName  func is not created
    }
    //All Are Customize Functions
    Human.prototype.eat = function () {
        console.log('Can eat');
    };
    Human.prototype.getAge = function () {
    };
    Human.prototype.setName = function (fName, lName) {
        this.fName = fName;
        this.lName = lName; 
    };
    Human.prototype.getFullName = function () {
        var firstLastName = this.fName + "  " + this.lName;
        return firstLastName;
    };
    return Human;
}());
var h = new Human('Furqan', 'Khanzada');
console.log('Full Name : ', h.getFullName());
//h.eat()
// # sourceMappingURL=classes.js.map