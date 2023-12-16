import express from "express";

const PORT = 4000;

const app = express(); //*서버이름, express funcion 사용 express application 생성

const handleHome = (req, res) => {
  return res.end(); //*request 종료. request가 왔으면 response를 return해줘야함.
}
const handleLogin = (req, res) => {
  return res.send("Login here.");
}

app.get("/", handleHome); //*누군가 root 페이지로 get request를 보냄
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`)

app.listen(PORT, handleListening);