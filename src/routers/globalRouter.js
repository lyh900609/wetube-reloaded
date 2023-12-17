import express from "express";

const globalRouter = express.Router(); // localhost:4000 이라 정의

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

export default globalRouter; //글로벌 라우터를 내보냄