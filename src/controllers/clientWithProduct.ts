import { Request, Response } from "express"
import { clientWithProductService } from "../services/clientWithProduct"

export const clientWithProductController = {
  // POST /clientwithproduct/set
  setProductToUser: async (req: Request, res: Response) => {
    const { userId, productId } = req.body
    
    try {
        const clientWithProduct = await clientWithProductService.create(userId, productId)
        
        return res.status(200).json(clientWithProduct)
    } catch (err) {
        if (err instanceof Error) {
            console.log(userId, productId)
            return res.status(400).json({ message: err.message });
        }
    }
},

  // POST /clientwithproduct/delete
  deleteProductToUser: async (req: Request, res: Response) => {
    const { userId, productId } = req.body
    
    try {
        await clientWithProductService.delete(userId, productId)
        
        return res.status(201).json("Associação deletada com sucesso!")
    } catch (err) {
        if (err instanceof Error) {
            console.log(userId, productId)
            return res.status(400).json({ message: err.message });
        }
    }
}
}