import { MongoClient } from "mongodb";

// const password = process.env.NEXT_APP_MONGODB_PASSWORD;

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // already destructured in the result
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://kfederer:${process.env.MONGODB_PASSWORD}@cluster0.xa99u.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
};

export default handler;
