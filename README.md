# SOLID Principles React Project

This project demonstrates the SOLID principles of OOP using React and TypeScript. Each Principle is illustrated with both "bad" and "good" examples to highlight the benefits od adhering to these principles.

## Project Structure

```
solid-principles-react/
├── src/
│   ├── principles/
│   │   ├── SingleResponsibility/
│   │   │   ├── Bad.tsx
│   │   │   └── Good.tsx
│   │   ├── OpenClosed/
│   │   │   ├── Bad.tsx
│   │   │   └── Good.tsx
│   │   ├── LiskovSubstitution/
│   │   │   ├── Bad.tsx
│   │   │   └── Good.tsx
│   │   ├── InterfaceSegregation/
│   │   │   ├── Bad.tsx
│   │   │   └── Good.tsx
│   │   └── DependencyInversion/
│   │       ├── Bad.tsx
│   │       └── Good.tsx
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## SOLID Principles

### 1. Single Responsibility Principle (SRP)

- Concept: A class should have only one reason to change.
- Example: Separating user data management, API calls, and UI rendering into distinct components.

### 2. Open-Closed Principle (OCP)

- Concept: Software entities should be open for extension but closed for modification.
- Example: Using interfaces to allow adding new shapes without modifying existing code.

### 3. Liskov Substitution Principle (LSP)

- Concept: Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
- Example: Proper use of inheritance with birds that can and cannot fly.

### 4. Interface Segregation Principle (ISP)

- Concept: Many client-specific interfaces are better than one general-purpose interface.
- Example: Separating worker interfaces for different types of entities.

### 5. Dependency Inversion Principle (DIP)

- Concept: High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Example: Using dependency injection to decouple data fetching from data display.

## Learning from the Examples

For each SOLID principle:

1. Start by examining the "Bad" example (`Bad.tsx`) in each principle's folder.
2. Identify the issues that violate the principle.
3. Then, look at the "Good" example (`Good.tsx`) to see how the code can be refactored to adhere to the principle.
4. Compare the two versions to understand the benefits of applying the SOLID principle.
