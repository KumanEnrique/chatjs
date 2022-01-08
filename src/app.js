const express = require("express")
const path = require('path')
const http = require('http')
const socketIo = require('socket.io')
const app = express()
const server = http.createServer(app)

//settings
app.set('port',process.env.PORT || 3000)
app.use(express.urlencoded({extended:true}))
// app.use(bodyParser.urlencoded({ extended: false }));

const io = socketIo(server);

//static files
app.use(express.static(path.join(__dirname,'public')))

io.on('connection', socket => {
    // console.log("nuevo cliente conectado")
    socket.on('message', body => {
        io.emit("messageServer",body)
        console.log(body)
    })
})

// app.get("/",(req,res)=>{
//     res.render("index")
//     // res.send("hola chat soy streamer")
// })

server.listen(app.get("port"),()=>{
    console.log(`server on http://localhost:3000`)
})