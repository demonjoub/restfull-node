const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const datas = require('./data/db.json')

app.get('/views', (req, res) => {
  const offset = req.query.offset
  const limit = req.query.limit
  
  if (offset && limit) {
    const mydata = datas.slice(offset, limit)
    return res.json(mydata)
  }
  return res.json(datas)
})

app.get('/view/:id', (req, res) => {
  res.json(datas.find(data => data.id === req.params.id))
})

app.post('/datas', (req, res) => {
  const id = (datas.length + 1).toString()
  datas.push({id, ...req.body })
  res.status(201).json({id, ...req.body })
})

app.put('/datas/:id', (req, res) => {
  const updateIndex = datas.findIndex(data => data.id === req.params.id)
  res.json(Object.assign(datas[updateIndex], req.body))
})


app.listen(3001, () => {
  console.log('Start server at port 3001.')
})

