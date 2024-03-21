import express from 'express';
import Todo from "./route/todo"
const app = express();
app.use(express.json())
app.use("/",Todo)





export default app