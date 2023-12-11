const express = require('express')
const app = express()
const cors = require("cors");
const corsOptions = {
  origin: "http://127.0.0.1:5500",
};
app.use(cors(corsOptions));
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
