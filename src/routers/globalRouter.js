import express from "express";
import {trending, search} from "../controllers/videoController";
import {join, login} from "../controllers/userController";

const globalRouter = express.Router(); // localhost:4000 이라 정의

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter; //글로벌 라우터를 내보냄