import epxress from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = epxress();

const PORT = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
    return res.json({ message: "Server is healthy V2" })
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);

})