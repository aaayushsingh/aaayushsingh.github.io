const express = require('express');
const bodyParser = require('body-parser')
//import setRoutes from "./routes";

const app = express();
app.set("port", process.env.PORT || 3000);

app.use("/", express.static(__dirname + '../index.html'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//setRoutes(app);
app.options('*', function(req, res){
    res.header('Access-control-Allow-Origin', 'https://aaayushsingh.github.io')
        .header('Access-Control-Allow-Headers', 'https://aaayushsingh.github.io')
        .header('content-type', 'appliction/json')
        .end();
})

app.get("/contact", function(req, res) {
  res.send("contact form div");
});

app.post('/contact', function(req,res){
  console.log(req);
})
    
app.listen(app.get("port"), () => {
  console.log("listening on port " + app.get("port"));
});
    

