import { createMovie,getMovieByID,getAllMovies,updateMovie } from "../service/movieService.js";

const createMovieController = async (req, res) => {
    const { Title, Year, Actor, Producer, imdbRating, Images } = req.body;

    try {
        const movie = await createMovie(Title, Year, Actor, Producer, imdbRating, Images);
        
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ message: "Failed to create movie", error: error.message });
    }
};

const getMovieByIDController = async (req, res) => {
    const movieId = req.params.id;

    try {
        const movie = await getMovieByID(movieId);
        if (movie) {
            res.status(200).json(movie);
        } else {
            res.status(404).json({ message: "Movie not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getAllMoviesController = async (req, res) => {
    try {
        const movies = await getAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const updateMovieController = async (req, res) => {
    const movieId = req.params.id;
    const newData = req.body;

    try {
        const updatedMovie = await updateMovie(movieId, newData);
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export { createMovieController, getMovieByIDController, getAllMoviesController, updateMovieController};