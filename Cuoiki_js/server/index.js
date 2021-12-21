import express from 'express'
import cors from 'cors'
import {connectDB} from './config/connectDB.js'
import BlogRouter from './routers/BlogRouter.js';

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/blog", BlogRouter);

app.listen(PORT, () => {
  console.log(`app run on port ${PORT}`);
});

export default app