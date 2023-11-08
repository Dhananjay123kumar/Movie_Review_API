const express = require("express");
const  mongoose  = require("mongoose");

const moviesSchema= new mongoose.Schema({
    
    movie:{
        type:String,
        required:true,
        trim:true
    },
    
    release:{
        type:Date,
        trim:true
    },
    author:{
        type:String,
        trim:true
    },
    hero:{
        type:String,
        trim:true
    },

    review:{
        type:String,
        default:"Favorite movie"
    },
    rating:{
        type:Number,
    },

})

const MoviesName= new mongoose.model("MovieName", moviesSchema)

module.exports= MoviesName;