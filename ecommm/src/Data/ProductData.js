import React from "react";
import faker from "faker";

export const productData = [...Array(20)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: Math.floor(faker.commerce.price()),
  brand: faker.lorem.word(),
  dastDelivery: faker.random.boolean(),
  ratings: Math.floor(Math.random() * 5) + 1,
  qty: Math.floor(Math.random() * 101) + 1,
  inCart: false,
  addQty: 0,
  wishlisted: false,
  cartQty: 0,
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale"
  ]),
  idealFor: faker.random.arrayElement(["Men", "Women", "Kids", "Beauty"]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional"
  ]),
  color: faker.commerce.color()
}));
