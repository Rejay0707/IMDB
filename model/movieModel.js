import mongoose from "mongoose";

const movieSchema=new mongoose.Schema(
    {
        Title:{
            type:String,
            required:true
        },
        Year:{
            type:String,
            required:true
        },
        Actor:{
            type:String,
            required:true
        },
        Producer:{
            type:String,
            required:true
        },
        imdbRating:{
            type:String,
            required:true
        },
        Images:{
            type:Array,
            required:true
        }
    },{
        timestamps: true,
    }
)


const Movie=mongoose.model('Movies',movieSchema)

export default Movie