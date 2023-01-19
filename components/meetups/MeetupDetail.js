import classes from "./MeetupDetail.module.css"

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      {/* <Image src='https://www.berlinerbaeder.de/fileadmin/_processed_/3/4/csm_5_strandbad_wannsee_1840x860px_428ed79620.jpg' width={220} height={180} alt='1st meetup' /> */}
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  )
}

export default MeetupDetail
