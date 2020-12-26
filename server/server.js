require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

//--------------------------------------------------------------
// MIDDLEWARES
//--------------------------------------------------------------
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

//--------------------------------------------------------------
// DATABASE CONNECTION
//--------------------------------------------------------------
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`server running on PORT ${PORT}`)))
.catch(error => console.log(error))
