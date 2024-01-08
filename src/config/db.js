import mongoose from 'mongoose';

const url = 'mongodb://root:mongopass@172.25.0.3:27017/apiTestDB';

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
    console.log('Conectado ao MongoDB');
    
});

export default db;
