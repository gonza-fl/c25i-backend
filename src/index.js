import 'dotenv/config';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index.routes.js';
import usersRouter from './routes/users.routes.js';
const app = express();

const PORT = process.env.PORT;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
router.use('/users', usersRouter)
app.use(router);
app.use(express.static(join(__dirname, 'public/css')))

app.listen(PORT, () =>
  console.log(`
====================================
        Listen on port ${PORT}
====================================
`)
);
