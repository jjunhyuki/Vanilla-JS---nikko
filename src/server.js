import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res)=> res.render("home"));
app.get("/*", (req, res)=> res.redirect("/")); //여기부분이 http://localhost:3000/ 이후로 어떤주소를 넣던간에 http://localhost:3000으로 가게하는 방법을해놓음

const handleListen = () => console.log('Listening on http://localhost:3000');
app.listen(3000, handleListen);

