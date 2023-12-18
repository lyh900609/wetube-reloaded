import express from "express";
import {trending} from "../controllers/videoController";

const globalRouter = express.Router(); // localhost:4000 이라 정의

globalRouter.get("/", trending);

export default globalRouter; //글로벌 라우터를 내보냄