const express = require('express');
const db = require('./db');
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')

const app = express();

app.use(cors())
app.use(express.json())

const AppRouter = require('./routes/appRouter.js')

const PORT = process.env.PORT || 3001;




app.get('/', (req,res) => {
    res.send('Server works!')
})

app.use('/api', AppRouter)
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
