import express from 'express'
import bodyParser from 'body-parser'
import mongoose  from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json({limit: "30mb", extend: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extend: true}))
app.use(cors())

// Grantimos abaixo que todas as rotas existentes dentro do posts.js, terão /posts antes
// Exemplo: localhost:5000/posts
app.use('/posts', postRoutes)

const CONNECTION_URL  = 'mongodb+srv://mern_application:mernapplication123@cluster0.g9mn2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`)))
.catch((error) => console.log(error.message))