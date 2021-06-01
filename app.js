const express = require("express");
const logger = require("morgan");
const path = require("path");

const teamRouter = require("./routes/teamRouter");
const indexRouter = require("./routes/indexRouter");

const app = express();
// console.log("path---------");
// console.log(path);
// console.log("dir__name");
// console.log(__dirname);
// console.log("path.join");
// console.log(path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middleware
app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));


//---------------------Index Page---------------------------------------------
app.get("/", function (request, response) {
  response.render("index", {
    user: null,
    teams: [{ team: "chappy" }, { team: "snoop" }, { team: "rusty" }],
  });
  // response.send("Who Let The Dogs Out?");
  response.json({
    name: "chappy",
    friends: ["snoop", "rusty", "nibbles"],
  
  });
});

//------------------------Photo Page---------------------------------
// app.get("/photo-fun", function (req, res) {
//   response.render("photos");
//   response.json({
//     name: "chappy",
//     fosters: ["snoop", "nibbles", "rusty"],
//   });
// });


//------------------------Pet Page----------------------------------
app.get(":pet/:id", function (request, response) {
    console.log(request.params);
    response.json({
        age: 3,
        type: request.params, pet,
        id: request.params.id,

        // var names = [
        //   { name: 'chappy',  age: 2},
        //   { name: 'snoop',  age: 3},
        //   { name: 'rusty', age: 1}
        // ];
    });
});

//----------------------------------------------------------
// app.post("/create-product", function (req, res) {
//   console.log(req.body);
//   res.json({
//     data: req.body,
//   });
// });

app.use("/", indexRouter);
app.use("/api/team", teamRouter);

app.listen(3000, function () {
  console.log(`Server is running on PORT: ${3000}`);
});




