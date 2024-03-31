import dotenv from "dotenv";
import express from "express";
import {createServer} from "http";
import cors from "cors";
import { initWs } from "./ws";


dotenv.config();
const app = express();
app.use(cors({
    cors:"*",
    methods:["GET","POST"]
}));

const httpServer = createServer(app);
initWs(httpServer);
const port = 3000;

httpServer.listen(port,()=>{
    console.log(`Server Running at ${port}`);
});

