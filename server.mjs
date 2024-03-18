import express from 'express';
import router from './router/router.mjs';
import { createServer } from 'http';

const app = express();
app.use(express.json());

const server = createServer(app);
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("hello world");
})
app.use('/bfhl', router);