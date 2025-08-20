var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.showInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year));
    };
    return Car;
}());
// --- Test ---
var car1 = new Car("Toyota", "Camry", 2022);
car1.showInfo(); // Brand: Toyota, Model: Camry, Year: 2022
