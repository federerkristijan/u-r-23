const user = process.env.MONGODB_USERNAME;
const pass = process.env.MONGODB_PASSWORD;

export const client =
  "mongodb+srv://" +
  user +
  ":" +
  pass +
  "@cluster0.7l67fin.mongodb.net/?retryWrites=true&w=majority";
