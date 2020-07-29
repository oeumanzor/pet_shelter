console.log ("exam.model.js")

const mongoose = require ("mongoose");

const PetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be longer"]
    },
    type: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Type of pet must be longer"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be longer"]
    },

    skill1: {
        type: String
    },

    skill2: { 
        type: String
    },

    skill3: {
        type: String
    }

}, {timestamps: true});

module.exports= mongoose.model("Pet", PetSchema)