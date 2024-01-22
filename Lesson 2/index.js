// Lesson 2
// Task 1
// Обчислити об'єм циліндра, у якого діаметр дна 16см, а висота 34.5м.

const d = 16;
const h = 34.5;
const r = d / 2;
const v = Math.PI * Math.pow(r, 2) * h;

console.log(`Об'єм циліндра: ${v} см3`);

// Task 2
// Зробити конвертер з градусів Цельсія в градуси Фаренгейта.

const celsius = 30;
const fahrenheit = celsius * 1.8 + 32;
console.log(`${celsius}°C is ${fahrenheit}°F`);