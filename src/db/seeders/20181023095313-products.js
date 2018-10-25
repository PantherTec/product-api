const seed = () => {
  const seedSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(count => ({
    name: `firstname_${count}`,
    description: `lastname_${count}`,
    price: count + 000,
    category: `image_${count}.com`,
    image: `gdhdfjd${count}`,
    color: `black`,
    createdAt: Date.now(),
    updatedAt: Date.now()
  }));
  return [...seedSet];
};
module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("products", seed(), {
      returning: true
    });
  },
  down: queryInterface => queryInterface.bulkDelete("products", null, {})
};
