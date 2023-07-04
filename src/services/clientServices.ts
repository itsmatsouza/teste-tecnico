    import { Client, ClientCreationAttributes } from "../models/Client";

    export const clientService = {
    create: async (attributes: ClientCreationAttributes) => {
        const client = await Client.create(attributes)

        return client
    },

    update: async ( res: Response) => {
        
    },

    findClient: async (id: number) => {
        const client = await Client.findByPk(id)

        if (!client) throw new Error('Cliente não existe!')

        return client
    }
    }