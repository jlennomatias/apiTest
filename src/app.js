const express = require('express');
const app = express();
const port = 3000;

// Criando rota padrão
app.get('/', (req, res) => {
    res.send('ola mundo!');
});

app.listen(port, () => {
    console.log('servidor no ar');
});
