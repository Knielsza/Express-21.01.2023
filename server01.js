

const express = require("express")
const app = express()
const PORT = 3000;

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//     res.send("dane html odesłane z serwera do przeglądarki")
//     console.log("kotleciki")
// })


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.use(express.static('static'))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/index.html")
})

app.post("/handleForm", function (req, res) {


    console.log(req.body);
    var first1 = parseInt(req.body.first)
    var second1 = parseInt(req.body.second)
    let math = (req.body.whatmath)

    console.log(first1)
    console.log(second1)
    console.log(math)
    // res.send("kkk")

    // var whatmath = Number(req.body.select.whatmath)
    // console.log(whatmath)
    // res.send("wynik:" + first1)

    // res.send(first1 + second1)
    var finals = first1 - second1
    var finalr = first1 - second1
    var finalm = first1 * second1
    var finald = first1 / second1
    console.log("wynik")
    // console.log(first1)
    // console.log(second1)
    var data = []


    switch (math) {
        case "Suma":
            data[0] = { message: req.body.whatmath + " dwu liczb", wynik: finals }
            break
        case "Różnica":
            data[0] = { message: req.body.whatmath + " dwu liczb", wynik: finalr }
            break
        case "Iloczyn":
            data[0] = { message: req.body.whatmath + " dwu liczb", wynik: finalm }
            break
        case "Iloraz":
            data[0] = { message: req.body.whatmath + " dwu liczb", wynik: finald }
            break
        case "All":
            data[1] = { message: req.body.whatmath + " dwu liczb", wynik: finals }, { message: req.body.whatmath + " dwu liczb", wynik: finalr }, { message: req.body.whatmath + " dwu liczb", wynik: finalm }, { message: req.body.whatmath + " dwu liczb", wynik: finald }
            break;
    }
    // res.send(JSON.stringify("wynik:" + finals))
    // // res.send("wynik:" + finals)
    // // res.send("wynik:" + finalr)
    // // res.send("wynik:" + finalm)
    // // res.send("wynik:" + finald)

    // // res.header("content-type", "application/json")
    res.header("content-type", "application/json")

    // app.use(bodyParser.json())
    res.send(data[1])
    JSON.stringify(data, null, 5)

})
