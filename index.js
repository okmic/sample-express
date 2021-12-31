import express from "express"
import mongoose from "mongoose"
import router from "./router.js"


const PORT = 3000
const DB_URL = "mongodb+srv://Michael:misha_09@cluster0.lbild.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

app.use(express.json())
app.use('/api', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => {
            console.log('Server started on port' + ' ' + PORT )
        })
    }
    catch {
            console.log('error')
    }
}
startApp()