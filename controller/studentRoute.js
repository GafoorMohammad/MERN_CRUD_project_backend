const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = express.Router();
const mongoose = require("mongoose")
studentRoute.post("/create-student", (req, res) => {
    studentSchema.create(req.body, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message }); // Handle error and return a response
        } else {
            res.json(data);
        }
    });
});

studentRoute.get("/", (req, res) => {
    studentSchema.find((err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message }); // Handle error and return a response
        } else {
            return res.json(data);
        }
    });
});

studentRoute.get("/update-student/:id", (req, res) => {
    studentSchema.findById(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message }); // Handle error and return a response
        } else {
            res.json(data);
        }
    });
});

studentRoute.put("/update-student/:id", (req, res) => {
    studentSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message }); // Handle error and return a response
        } else {
            res.json(data);
        }
    });
});

studentRoute.delete("/delete-student/:id", (req, res) => {
    studentSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message }); // Handle error and return a response
        } else {
            res.json(data);
        }
    });
});

module.exports = studentRoute;