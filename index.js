import express from "express"
import mongoose from "mongoose"
import router from "./router.js"
import fileUpload from "express-fileupload"


const PORT = 3000
const DB_URL = "mongodb+srv://Name:Password@cluster0.lbild.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
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