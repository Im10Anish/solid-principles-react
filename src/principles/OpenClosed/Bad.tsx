import React from "react";

interface Shape {
  type: "circle" | "square";
  size: number;
}

const AreaCalculator: React.FC<{ shapes: Shape[] }> = ({ shapes }) => {
  const calculateArea = (shape: Shape): number => {
    if (shape.type === "circle") {
      return Math.PI * shape.size * shape.size;
    } else if (shape.type === "square") {
      return shape.size * shape.size;
    }

    return 0;
  };

  const totalArea = shapes.reduce(
    (sum, shape) => sum + calculateArea(shape),
    0
  );

  return <div>Total Area : {totalArea}</div>;
};

export default AreaCalculator;
