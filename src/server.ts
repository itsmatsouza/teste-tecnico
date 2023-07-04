import express from "express"
import { router } from "./routes";

const app = express()

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(router)

app.listen(PORT, () => {
  console.log(`Server started sucessfuly at port ${PORT}`)
})