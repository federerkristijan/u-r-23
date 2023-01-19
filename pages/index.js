import MeetupList from "components/meetups/MeetupList";

const dummy_meetups = [
  {
    id: 'm1',
    title: 'The 1st meetup',
    image: 'https://www.berlinerbaeder.de/fileadmin/_processed_/3/4/csm_5_strandbad_wannsee_1840x860px_428ed79620.jpg',
    address: 'S Wannsee',
    description: 'swimming'
  },
  {
    id: 'm2',
    title: 'The 2nd meetup',
    image: 'https://withberlinlove.com/wp-content/uploads/2013/06/Strandbad-Pl%c3%b6tzensee.jpg',
    address: 'Plötzensee',
    description: 'swimming closer'
  },
]

const HomePage = (props) => {

  return (
    <MeetupList meetups={props.meetups}/>
  )
}

// exectuted durign the build provess, never shown on client-side
export const getStaticProps = async() => {
  return {
    props: {
      meetups: dummy_meetups
    }
  }
}

export default HomePage;
