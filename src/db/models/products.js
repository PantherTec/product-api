module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    color: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    createdAt: {
      validate: {
        notEmpty: true
      },
      type: DataTypes.STRING,
      defaultValue: Date.now()
    },

    updatedAt: {
      validate: {
        notEmpty: true
      },
      type: DataTypes.STRING,
      defaultValue: Date.now()
    }
  });
  Product.getAll = () => {
    return Product.findAll({
      attributes: ["id", "name", "price"]
    });
  };
  Product.createProduct = params =>
    Product.create(params).then(product => product);

  Product.details = productId => {
    return Product.findOne({
      where: {
        id: productId
      }
    });
  };
  return Product;
};
