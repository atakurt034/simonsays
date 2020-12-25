import express from 'express'
import path from 'path'
const __dirname = path.resolve()

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

const PORT = 3000
if (PORT == null || PORT == '') {
  PORT = 3000
}

app.listen(PORT, (req, res) => {
  console.log(`server started at ${PORT}`)
})
