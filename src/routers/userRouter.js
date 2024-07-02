import express from "express";
import {edit, remove, see, logout} from "../controllers/userController";

const userRouter = express.Router(); // http://localhost:4000/user 라 정의

userRouter.get(":id", see);
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;