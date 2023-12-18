import express from "express";
import {watch, edit} from "../controllers/videoController"

const videoRouter = express.Router(); //localhost:4000/videos 라고 정의

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit); 

export default videoRouter;