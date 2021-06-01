const express = require("express");
const router = express.Router();
let teamArray = [
    {
        id: 1,
        name: "chappy",
    },
    {
        id: 2,
        name: "snoop",
    },
    {
        id: 3,
        name: "rusty",
    },
];
router.get("/", function (req, res) {
    console.log(req.query);
    let foundTeam;
    if (req.query.name) {
    teamArray.forEach((team) => {
        if (team.name === req.query.name) {
        foundTeam = team;
        }
    });
    res.json({
        data: foundTeam,
    });
    } else {
    res.json({
        data: teamArray,
    });
    }
});
//exporting file
module.exports = router;