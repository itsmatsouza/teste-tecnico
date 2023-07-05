import { Request, Response } from "express"
import { clientService } from "../services/clientServices";
import { Client } from "../models/Client";

export const clientController = {
    // GET /clients/:id/show
    show: async (req: Request, res: Response) => {
        const { id } = req.params
        
        const client = await Client.findByPk(id)

        return res.status(200).json(client)
    },
    
    // POST /clients/create
    create: async (req: Request, res: Response) => {
        const {
            code,
            name,
            legalEntity,
            cnpj,
            state,
            birth
        } = req.body

        try {
            const client = await clientService.create({
                code,
                name,
                legalEntity,
                cnpj,
                state,
                birth
            })

            return res.status(201).json(client)

        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },

    // PUT /clients/:id/update
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, legalEntity, cnpj, state, birth } = req.body

        try {
            const updatedClient = await clientService.update(Number(id), {
                name,
                legalEntity,
                cnpj,
                state,
                birth
            })

            return res.json(updatedClient)
            
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },

    // DELETE /clients/:id/delete
    delete: async (req: Request, res: Response) => {
        const { id } = req.params
        
        const client = await clientService.findClient(Number(id))

        try {
            client.destroy()

            return res.status(200).json("Cliente Apagado com Sucesso!")
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }    
}