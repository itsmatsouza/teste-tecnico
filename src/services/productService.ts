import { Product, ProductCreationAttributes } from "../models/Product";

export const productService = {
    create: async (attributes: ProductCreationAttributes) => {
        const product = await Product.create(attributes)

        return product
    },

    update: async ( id: number, attributes: {
        description: string,
        price: number,
        fee: number
    }) => {
        const [affectedRows, updatedProduct] = await Product.update(attributes, {
            where: {
                id: id
            },
            returning: true
        })

        return updatedProduct
    },

    findProduct: async (id: number) => {
        const product = await Product.findByPk(id)

        if (!product) throw new Error('Produto não existe!')

        return product
    }
}