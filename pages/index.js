import { MongoClient } from "mongodb";

import MeetupList from "components/meetups/MeetupList";



const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// executed on the server on every request
// export const getServerSideProps = async(context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: dummy_meetups
//     }
//   }
// }


// exectuted during the build process, never shown on client-side
export const getStaticProps = async() => {

  const client = await MongoClient.connect(
    "mongodb+srv://kfederer:Xt8NhMqeQAsByX7Y@cluster0.7l67fin.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10
  }
}

export default HomePage;
