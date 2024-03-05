import Express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import taskRouter from "./routes/task.routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = Express();
app.use(cors({
    origin: "http://localhost:5173", 
    credentials : true,
}));
app.use(Express.json());
app.use(morgan('dev'));
app.use(cookieParser()); //para manejar y acceder de forma mas sencilla a las cookies
app.use("/api", authRoutes);
app.use("/api", taskRouter);


export default app;