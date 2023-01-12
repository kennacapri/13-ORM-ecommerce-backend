// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {});
// Products belongsTo Category
Category.hasMany(Product, {});

// Categories have many Products
Product.belongToMany(Tags, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_tags",
});
// Products belongToMany Tags (through ProductTag)
Tag.belongToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tag_product",
});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
