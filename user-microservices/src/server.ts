import express, { json } from "express";
import { userRoutes } from "./interfaces/http/routes/user-routes";

const app = express();

app.use(json());
app.use(userRoutes);

app.listen(process.env.PORT || 3333);

export { app };
