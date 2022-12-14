const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../Public")));
app.use("/images", express.static(path.join(__dirname, "../Public")))

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log('Port running on 4005.')
})