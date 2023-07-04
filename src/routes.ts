import express from 'express'
import { clientController } from './controllers/clientController'

const router = express.Router()

router.post("/clients/create", clientController.create)
router.get("/clients/:id/show", clientController.show)
router.delete("/clients/:id/delete", clientController.delete)

export { router }