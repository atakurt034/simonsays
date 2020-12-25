import express from 'express'
import path from 'path'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const __dirname = path.resolve()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

const PORT = 3000 || ''

app.listen(PORT, console.log('Server started at port 3000'))
