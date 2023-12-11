const express = require('express')
const app = express()
app.use(express.json())

app.post('/auth', (request, response) => {
  response.json({
    success: true,
  })
})

const PORT = 3005

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: localhost:${PORT}`)
})
