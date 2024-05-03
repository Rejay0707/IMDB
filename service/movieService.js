import Movie from "../model/movieModel.js";

const createMovie = async (Title, Year, Actor, Producer, imdbRating, Images) => {
    return await Movie.create({
        Title,
        Year,
        Actor,
        Producer,
        imdbRating,
        Images
    });
};

const getMovieByID = async (movieId) => {
    return await Movie.findById(movieId);
};

const getAllMovies = async () => {
    return await Movie.find();

};

const updateMovie = async (movieId, newData) => {
    return await Movie.findByIdAndUpdate(movieId, newData, { new: true });
};

export{createMovie,getMovieByID,getAllMovies,updateMovie}