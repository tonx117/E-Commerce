import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './src/routes/productos.routes.js';
import sequelize from './src/db/database.js'

dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development' });

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
}).catch(err => {
    console.error('Error al sincronizar con la base de datos:', err);
});
