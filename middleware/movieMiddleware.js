import Joi from "joi";

const movieValidation = (data) => {
  const schema = Joi.object({
    Title: Joi.string().required(),
    Year: Joi.string().required(),
    Actor: Joi.string().required(),
    Producer: Joi.string().required(),
    imdbRating: Joi.string().required(),
    Images: Joi.string().required(),
  });
  return schema.validate(data);
};

export default movieValidation;
