import MeetupDetail from "components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://www.berlinerbaeder.de/fileadmin/_processed_/3/4/csm_5_strandbad_wannsee_1840x860px_428ed79620.jpg"
      title="1st Meetup"
      address="S Wannsee"
      description="this is 1st meetup"
    />
  );
};

// fallback: false - paths are defined, if not 404. else path are dynamically pregenerated
export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

// page is pregenerated during the build process
export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://www.berlinerbaeder.de/fileadmin/_processed_/3/4/csm_5_strandbad_wannsee_1840x860px_428ed79620.jpg",
        id: meetupId,
        title: "1st Meetup",
        address: "S Wannsee",
        description: "this is 1st meetup",
      },
    },
  };
};

export default MeetupDetails;
