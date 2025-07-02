// generate-data.js
const fs = require('fs');

const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Nissan', 'Hyundai', 'Kia'];
const models = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Truck', 'Minivan', 'Sports Car', 'Convertible'];

const cars = [];

for (let i = 1; i <= 100; i++) {
  const make = makes[Math.floor(Math.random() * makes.length)];
  const model = models[Math.floor(Math.random() * models.length)];
  const year = 2010 + Math.floor(Math.random() * 14);
  const price = 10000 + Math.floor(Math.random() * 40000);
  
  const car = {
    id: i,
    make: make,
    model: model,
    year: year,
    price: price,
    image_url: `https://placehold.co/600x400/555/FFF?text=${encodeURIComponent(make + ' ' + model)}`,
    short_description: `A reliable and stylish ${year} ${make} ${model}.`,
    long_description: `This ${year} ${make} ${model} is in excellent condition and is perfect for both city driving and long road trips. It comes with a full service history and has been meticulously maintained. With a price of $${price.toLocaleString()}, it's a fantastic deal.`
  };
  cars.push(car);
}

// Eleventy expects data files to export the data
const data = { cars: cars }; 

// Write to the _data directory so Eleventy can find it
fs.writeFileSync('./_data/cars.json', JSON.stringify(data, null, 2));

console.log('Successfully generated 100 cars into _data/cars.json');