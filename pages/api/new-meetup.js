import { MongoClient } from "mongodb";

const password = env.process.NEXT_APP_MONGODB_PASSWORD;

const handler = (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient.connect('mongodb+srv://kfederer:{password}@cluster0.xa99u.mongodb.net/meetups?retryWrites=true&w=majority');
  }
}

export default handler
