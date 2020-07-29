console.log ("exam.route.js")

const Exams = require("../controllers/exam.controller")

module.exports = app => {
    app.get("/api/exam", Exams.getAll);
    app.post("/api/exam", Exams.create);
    app.get("/api/exam/:_id", Exams.getOne);
    app.put("/api/exam/:_id", Exams.update);
    app.delete("/api/exam/:_id", Exams.remove);
}