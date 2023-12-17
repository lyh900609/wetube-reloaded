import express from "express";

const PORT = 4000;

const app = express(); //*서버이름, express funcion 사용 express application 생성

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); 
  next(); //*완료가 되고 난 후에 handleHome을 진행
};

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

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);
 //*누군가 root 페이지로 get request를 보냄

 const globalRouter = express.Router();
 const userRouter = express.Router();
 const videoRouter = express.Router();

 app.use("/", globalRouter);
 app.use("/vidoes", videoRouter);
 app.use("user", userRouter);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`)

app.listen(PORT, handleListening);