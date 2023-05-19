import express, { json } from "express";
import { userRoutes } from "./interfaces/http/routes/user-routes";
import mongoose from "mongoose";
import { dbUrl } from "./infra/config/db-config";

const app = express();

app.use(json());
app.use(userRoutes);

app.listen(process.env.PORT || 3333);

mongoose.connect(dbUrl);

export { app };
