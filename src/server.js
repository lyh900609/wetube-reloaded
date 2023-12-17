import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express(); //*서버이름, express funcion 사용 express application 생성


const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed!!")
  next();
};

const handleHome = (req, res) => {
  console.log("now in homePage!")
  return res.end(); //*request 종료. request가 왔으면 response를 return해줘야함.
};

const handleProtected = (req, res) => {
  return res.send("welco to the Private lounge!");
}


app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);
 //*누군가 root 페이지로 get request를 보냄

 app.use("/", globalRouter);
 app.use("/user", userRouter);
 app.use("/videos", videoRouter);


const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`)

app.listen(PORT, handleListening);