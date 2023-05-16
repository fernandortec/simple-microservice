import express, { json } from "express";
import { postRoutes } from "./interfaces/routes/post-routes";
import morgan from 'morgan'

const app = express();

app.use(morgan('dev'))
app.use(json());
app.use(postRoutes)

app.listen(process.env.PORT || 3000);

export { app };
