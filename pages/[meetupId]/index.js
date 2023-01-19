import Image from 'next/image'
import React, { Fragment } from 'react'

const MeetupDetail = () => {
  return (
    <Fragment>
      {/* <Image src='https://www.berlinerbaeder.de/fileadmin/_processed_/3/4/csm_5_strandbad_wannsee_1840x860px_428ed79620.jpg' width={220} height={180} alt='1st meetup' /> */}
      <img src='https://www.berlinerbaeder.de/fileadmin/_processed_/3/4/csm_5_strandbad_wannsee_1840x860px_428ed79620.jpg' alt='1st meeting' />
      <h1>Our first meetup</h1>
      <address>S Wannsee</address>
      <p>The meetup description</p>
    </Fragment>
  )
}

export default MeetupDetail
