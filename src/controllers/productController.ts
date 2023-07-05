import { Request, Response } from "express"
import { productService } from "../services/productService";
import { Product } from "../models/Product";

export const productController = {
    // GET /product/:id/show
    show: async (req: Request, res: Response) => {
        const { id } = req.params
        
        const product = await Product.findByPk(id)

        return res.status(200).json(product)
    },
    
    // POST /product/create
    create: async (req: Request, res: Response) => {
        const {
            code,
            description,
            price,
            fee
        } = req.body

        try {
            const product = await productService.create({
              code,
              description,
              price,
              fee
            })

            return res.status(201).json(product)

        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },

    // PUT /product/:id/update
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { description, price, fee } = req.body

        try {
            const updatedProduct = await productService.update(Number(id), {
              description,
              price,
              fee
            })

            return res.json(updatedProduct)
            
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },

    // DELETE /product/:id/delete
    delete: async (req: Request, res: Response) => {
        const { id } = req.params
        
        const product = await productService.findProduct(Number(id))

        try {
            product.destroy()

            return res.status(200).json("Produto Apagado com Sucesso!")
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }    
}