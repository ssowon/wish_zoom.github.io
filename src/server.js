import http from "http";
import express from "express";
import SocketIO from "socket.io";
import path from 'path';

import * as dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.WEATHER_API_KEY;
const __dirname = path.resolve();

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname+"/src/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*",(req,res) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
  socket.on("enter_room", (msg, done) => {
    console.log(msg);
    setTimeout(() => {
      done();
    }, 10000)
  });
});

/*
const wss = new WebSocket.Server({ server });
const sockets = []; 

wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "Anon";
  console.log("Connected to Browser!");
  socket.on("close", onSocketClose); 
  socket.on("message", (msg) => {
    const message = JSON.parse(msg);
    console.log(message)
    console.log(socket.nickname)
    switch(message.type) {
      case "new_message" :
        sockets.forEach(aSocket => aSocket.send(`${socket.nickname}: ${message.payload}`));
        break;
      case "nickname" :
        socket["nickname"] = message.payload;
        console.log("Set nick"+socket["nickname"])
    }
  });
  socket.send("Hello!"+API_KEY);
}); */

const handleListen = () => console.log(`Listening on http://localhost:3000`);
httpServer.listen(3000, handleListen);