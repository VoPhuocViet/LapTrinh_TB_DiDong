class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }


  getArea(): number {
    return this.width * this.height;
  }


  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }

  showInfo(): void {
    console.log(
      `Width: ${this.width}, Height: ${this.height}, Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`
    );
  }
}


const rect1 = new Rectangle(5, 10);
rect1.showInfo(); 

