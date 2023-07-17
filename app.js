
const express = require('express')
const app = express()

const people = require('./server')

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})