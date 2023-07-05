import express from 'express'
import { clientController } from './controllers/clientController'
import { productController } from './controllers/productController'

const router = express.Router()

router.post("/clients/create", clientController.create)
router.get("/clients/:id/show", clientController.show)
router.put("/clients/:id/update", clientController.update)
router.delete("/clients/:id/delete", clientController.delete)

router.post("/products/create", productController.create)
router.get("/products/:id/show", productController.show)
router.put("/products/:id/update", productController.update)
router.delete("/products/:id/delete", productController.delete)

export { router }