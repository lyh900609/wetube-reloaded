import express from "express";

const videoRouter = express.Router(); //localhost:4000/videos 라고 정의
const handleWatchVideo = (req, res) => res.send("watch viedoes");

videoRouter.get("/watch", handleWatchVideo);

export default videoRouter;