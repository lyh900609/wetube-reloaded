import express from "express";

const userRouter = express.Router(); // http://localhost:4000/user 라 정의

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);

export default userRouter;