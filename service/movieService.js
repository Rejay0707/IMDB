import Movie from "../model/movieModel.js";

// const createMovie = async (Title, Year, Actor, Producer, imdbRating, Images) => {
//     return await Movie.create({
//         Title,
//         Year,
//         Actor,
//         Producer,
//         imdbRating,
//         Images
//     });
// };

const createMovie = async (
  Title,
  Year,
  Actor,
  Producer,
  imdbRating,
  Images
) => {
  // Check if the movie already exists
  const existingMovie = await Movie.findOne({ Title, Year });

  if (existingMovie) {
    throw new Error("Movie already exists");
  }

  return await Movie.create({
    Title,
    Year,
    Actor,
    Producer,
    imdbRating,
    Images,
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

export { createMovie, getMovieByID, getAllMovies, updateMovie };
