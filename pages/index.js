import { MongoClient } from "mongodb";

import MeetupList from "components/meetups/MeetupList";

// const dummy_meetups = [
//   {
//     id: "m1",
//     title: "The 1st meetup",
//     image:
//       "https://www.berlinerbaeder.de/fileadmin/_processed_/3/4/csm_5_strandbad_wannsee_1840x860px_428ed79620.jpg",
//     address: "S Wannsee",
//     description: "swimming",
//   },
//   {
//     id: "m2",
//     title: "The 2nd meetup",
//     image:
//       "https://withberlinlove.com/wp-content/uploads/2013/06/Strandbad-Pl%c3%b6tzensee.jpg",
//     address: "Plötzensee",
//     description: "swimming closer",
//   },
// ];

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
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.7l67fin.mongodb.net/?retryWrites=true&w=majority`
  )
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
