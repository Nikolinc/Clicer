import {
  BankData,
  CursorData,
  FactoryData,
  FarmData,
  GrandmaData,
  MineData,
  TempleData,
} from "../../Data/productData";
import Product from "../product";

export const Cursor = new Product(CursorData);
export const Grandma = new Product(GrandmaData);
export const Farm = new Product(FarmData);
export const Mine = new Product(MineData);
export const Factory = new Product(FactoryData);
export const Bank = new Product(BankData);
export const Temple = new Product(TempleData);

export const ProductArray = [
  Cursor,
  Grandma,
  Farm,
  Mine,
  Factory,
  Bank,
  Temple,
];
