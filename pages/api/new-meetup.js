import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // already destructured in the result
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://kfederer:TbCJTe1k2kKEX2ZM@cluster0.7l67fin.mongodb.net/?retryWrites=true&w=majority"
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
