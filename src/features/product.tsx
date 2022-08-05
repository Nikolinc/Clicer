import ProductType from "../Types/product";

export default class Product implements ProductType {
  name: string;
  increase: number;
  Price: number;
  description: string;
  imagePositionX: number;
  imagePositionY: number;
  CookiesInSecond: number;
  count = 0;

  constructor(product: ProductType) {
    this.name = product.name;
    this.Price = product.Price;
    this.description = product.description;
    this.imagePositionX = product.imagePositionX;
    this.imagePositionY = product.imagePositionY;
    this.CookiesInSecond = product.CookiesInSecond;
    this.increase = product.increase;
  }

  buyProduct() {
    this.count++;
    this.CookiesInSecond += this.CookiesInSecond;
    this.Price = this.Price * (this.increase * this.count);
    return this.count;
  }

  getCount() {
    return this.count;
  }

  getPrice() {
    return this.Price;
  }

  getAll(): ProductType {
    return this;
  }

  getPosition() {
    return [this.imagePositionX, this.imagePositionY];
  }
}
