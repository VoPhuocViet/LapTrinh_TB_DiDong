var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    Rectangle.prototype.showInfo = function () {
        console.log("Width: ".concat(this.width, ", Height: ").concat(this.height, ", Area: ").concat(this.getArea(), ", Perimeter: ").concat(this.getPerimeter()));
    };
    return Rectangle;
}());
var rect1 = new Rectangle(5, 10);
rect1.showInfo();
