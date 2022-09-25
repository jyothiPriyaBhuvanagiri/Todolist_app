const express = require ("express");
const bodyParser =require("body-parser")
const path = require("path");


const app = express();

app.set("view engine", "ejs")
let lists =[];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( 'public'));


app.get("/", function(req, res){

let today = new Date();

let options ={
    weekday: "long",
    year: "numeric",
    month:"long",
    day: "numeric"
}
    let day=(today.toLocaleDateString("en-US", options));
    res.render("index", { ListItem:day,  newListItem: lists})
});
app.post("/", function(req, res){
             let list=req.body.listItem;
            lists.push(list)
            res.redirect("/")
})

app.get("/" , function(req, res){
    res.send("hello")
})

app.listen(3000, function(){
    console.log("this is aa server");
})