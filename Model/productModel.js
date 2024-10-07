import ProductDAO from "../DAO/productDAO.js";

export default class ProductModel {
  #id;
  #title;
  #price;
  #description;
  #category;
  #urlImage;

  constructor(attrs = {}) {
    const { id, title, price, description, category, urlImage } = attrs;

    this.#id = id;
    this.#title = title;
    this.#description = description;
    this.#price = price;
    this.#category = category;
    this.#urlImage = urlImage;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    this.#price = value;
  }

  get category() {
    return this.#category;
  }

  set category(value) {
    this.#category = value;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    this.#description = value;
  }

  get urlImage() {
    return this.#urlImage;
  }

  set urlImage(value) {
    this.#urlImage = value;
  }

  getProducts() {
    const productDAO = new ProductDAO();
    const products = productDAO.selectAll();

    return products.map(
      (row) =>
        new ProductModel({
          id: row.id,
          title: row.title,
          description: row.description,
          category: row.category,
          price: row.price,
          urlImage: row.urlImage,
        })
    );
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      description: this.#description,
      category: this.#category,
      price: this.#price,
      urlImage: this.#urlImage,
    };
  }
}
