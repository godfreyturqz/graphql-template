require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// GRAPHQL
const { graphqlHTTP } = require('express-graphql')

const app = express()

//--------------------------------------------------------------
// MIDDLEWARES
//--------------------------------------------------------------
app.use(cors())
app.use('/api', graphqlHTTP({
    schema: require('./schema/schema'),
    graphiql: true
}))

//--------------------------------------------------------------
// ROUTES
//--------------------------------------------------------------
app.get('/', (req, res)=> {
    res.send(`<a href=/api>Go to GraphiQL >>></a>`)
})

//--------------------------------------------------------------
// DATABASE CONNECTION
//--------------------------------------------------------------
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => app.listen(PORT, () => console.log(`server running on PORT ${PORT}`)))
.catch(error => console.log(error))
