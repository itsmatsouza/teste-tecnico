import { Client } from "./Client";
import { ClientWithProduct } from "./ClientWithProducts";
import { Product } from "./Product";

Client.belongsToMany(Product, { through: ClientWithProduct });
Product.belongsToMany(Client, { through: ClientWithProduct });
