import express from "express";
import {edit, edit_name, remove} from "../controllers/userController";

const userRouter = express.Router(); // http://localhost:4000/user 라 정의

userRouter.get("/edit", edit);
userRouter.get("/edit/name", edit_name);
userRouter.get("/remove", remove);

export default userRouter;