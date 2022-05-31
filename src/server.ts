import express from 'express';
import { routes } from './routes';
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors())
app.use(express.json())

app.use(routes)


app.listen(process.env.PORT || 3333, 
    () => {
    console.log('server is running')
})