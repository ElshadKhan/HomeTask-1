import express from 'express'
 import {videoRouter} from "./routes/videoRouter"

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json());

app.use('/api', videoRouter)


app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})