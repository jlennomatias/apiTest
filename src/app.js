import express, { json } from 'express';
import db from './config/db.js';
import userRoutes from './routes/index.js';

const app = express();

app.use(json()); 

// Conectar ao MongoDB
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Usar as rotas do usuário
app.use('/api', userRoutes);

export default app;
