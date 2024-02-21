import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express(); //*서버이름, express funcion 사용 express application 생성

const handleHome = (req, res, next) => {
  console.log("now in homePage!");  
  next();
};

const handleProtected = (req, res) => {
  return res.send("welco to the Private lounge!");
}

const logger = morgan("dev");
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger); //morgan함수는 미들웨어를 리턴줌
app.get("/", handleHome);
app.get("/protected", handleProtected);
 //*누군가 root 페이지로 get request를 보냄

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/user", userRouter);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`)

app.listen(PORT, handleListening);