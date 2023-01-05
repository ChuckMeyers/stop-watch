const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000

app.use(express.static('public'))

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})