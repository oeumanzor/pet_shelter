console.log("exam.controller.js")

const Pet = require("../models/exam.model");
const { update } = require("../models/exam.model");

class ExamController {
    create(req, res) {
        const newPet = new Pet(req.body);
        newPet.save()
            .then( () => res.json(newPet))
            .catch( errors => res.json(errors));
    }
    getAll(req, res) {
        Pet.find().sort("type")
            .then( petList => res.json(petList) )
            .catch( errors => res.json(errors) );
    }
    getOne(req,res) {
        Pet.findOne({_id: req.params._id})
            .then( activity => res.json(activity) )
            .catch ( errors => res.json(errors) );
        }
    update(req, res) {
        Pet.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) ); 
    }
    remove(req, res) {
        Pet.findByIdAndRemove({_id: req.params._id})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) ); 
    }

}

module.exports = new ExamController();