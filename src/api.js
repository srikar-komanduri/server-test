const express = require('express')
const serverless = require('serverless-http')

const app = express()
app.set('port', process.env.PORT || 3003);
const router = express.Router()


router.get('/',(req,res)=>{
    res.json({
        "name":"srikar"
    })
})

router.post('/callback',(req,res)=>{
    res.json({})
})

app.use('/.netlify/functions/api',router)


module.exports.handler = serverless(app)