

var express = require("express");
var http = require("http")
var path = require("path")
var nodemailer = require("nodemailer")

var app = express();
var server = http.Server(app)
var port = 500

app.set("port", port)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "src")))

//Routing
app.get("/", function(req, response){
    response.sendFile(path.join(__dirname, "src/index.html"))
})

app.post("/send_email", function(req, response){
    //var from = req.body.from
    var to = req.body.to
    var subject = req.body.subject
    var message = req.body.message

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'laoxiaoan@gmail.com',
          pass: 'kmrqtpukfalpieyl'
        }
    })

    var mailOptions = {
        //from: from,
        to: to,
        subject:subject,
        text:message
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
        } else {
            
            console.log('Message sent: ' + info.response);
        }
    })
})


server.listen(port, function(){
    console.log("starting server on port " + port)
})
console.clear()

