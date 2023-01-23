import { MongoClient } from "mongodb";

import Client from "./client";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.7l67fin.mongodb.net/?retryWrites=true&w=majority`
    )
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
};

export default handler;
