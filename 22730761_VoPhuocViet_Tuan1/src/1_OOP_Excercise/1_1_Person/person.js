var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.hienThi = function () {
        console.log("name: ".concat(this.name, ", age: ").concat(this.age));
    };
    return Person;
}());
var person1 = new Person("Alice", 25);
person1.hienThi();
