const express = require('express');
const router = new express.Router();


const MoviesName = require("../models/movies")

router.post("/movies", async (req, res) => {
    try {
        const addingMoviesRecords = new MoviesName(req.body)
        console.log(req.body);

        const insertMovies = await addingMoviesRecords.save();
        res.status(201).send(insertMovies);

    } catch (e) {
        res.status(400).send(e);

    }
})

router.get("/movies", async (req, res) => {
    try {
        const getMovies = await MoviesName.find(req.query);
        res.send(getMovies);
        console.log(req.query)

    } catch (e) {
        res.status(400).send(e);

    }
})

router.get("/movies/query", async (req, res) => {
    try {
        const getMovies = await MoviesName.find(req.query);
        res.send(req.query);
        console.log(req.query)

    } catch (e) {
        res.status(400).send(e);

    }
})


router.get("/movies/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMovie = await MoviesName.findById(_id);
        res.send(getMovie);


    } catch (e) {
        res.status(400).send(e);

    }
})

router.patch("/movies/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getMovie = await MoviesName.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(getMovie);

    } catch (e) {
        res.status(500).send(e);

    }
})


router.delete("/movies/:id", async (req, res) => {
    try {

        const getMovie = await MoviesName.findByIdAndDelete(req.params.id);
        res.send(getMovie);

    } catch (e) {
        res.status(500).send(e);

    }
})

module.exports = router;