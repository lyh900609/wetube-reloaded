import express from "express";
import {see, edit, deleteVidoe, upload} from "../controllers/videoController"

const videoRouter = express.Router(); //localhost:4000/videos 라고 정의

videoRouter.get("/upload", upload); //upload를 가장위에 두어야하는 이유는 upload도 변수로 인식해 버림
videoRouter.get("/:id(\\d+)", see); // (\\d+) 입력방식 설정. 숫자만 받음
videoRouter.get("/:id/edit(\\d+)", edit);
videoRouter.get("/:id/delete(\\d+)", deleteVidoe);



export default videoRouter;