    import { Client, ClientCreationAttributes } from "../models/Client";

    export const clientService = {
    create: async (attributes: ClientCreationAttributes) => {
        const client = await Client.create(attributes)

        return client
    },

    update: async ( id: number, attributes: {
        name: string,
        legalEntity: "J" | "F" | "O",
        cnpj: string,
        state: string,
        birth: string,
    }) => {
        const [affectedRows, updatedClient] = await Client.update(attributes, {
            where: {
                id: id
            },
            returning: true
        })

        return updatedClient
    },

    findClient: async (id: number) => {
        const client = await Client.findByPk(id)

        if (!client) throw new Error('Cliente não existe!')

        return client
    }
    }