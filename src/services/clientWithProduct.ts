import { ClientWithProduct } from "../models/ClientWithProducts";

export const clientWithProductService = {
  create: async (clientId: number, productId: number) => {
    const clientWithProduct = await ClientWithProduct.create({
      clientId,
      productId,
    });

    return clientWithProduct;
  },

  delete: async (clientId: number, productId: number) => {
    await ClientWithProduct.destroy({
      where: {
        clientId,
        productId,
      },
    });
  },
};
