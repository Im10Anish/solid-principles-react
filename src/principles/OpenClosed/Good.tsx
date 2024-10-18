import React from "react";

interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square implements Shape {
  constructor(private side: number) {}

  calculateArea(): number {
    return this.side * this.side;
  }
}

// New shape can be added without modifying existing code
class Triangle implements Shape {
  constructor(private base: number, private height: number) {}

  calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}

const AreaCalculator: React.FC<{ shapes: Shape[] }> = ({ shapes }) => {
  const totalArea = shapes.reduce(
    (sum, shape) => sum + shape.calculateArea(),
    0
  );

  return <div>Total Area: {totalArea}</div>;
};

export default AreaCalculator;
