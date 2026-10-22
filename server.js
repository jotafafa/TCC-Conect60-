const express = require('express');
const routes = require('./TCC-Conect60--main/src/routes');

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor CONECT60+ rodando na porta ${PORT}: http://localhost:${PORT}`);
});