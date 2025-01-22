import React from 'react'
import Herosection from '../Herosection/Herosection';
import Diper from '../Diper/Diper';
import Gif from '../MarqueGif/Gif';
import Pad from '../Pad/Pad';
import Benfit from '../Benifit/Benfit';
import Offer from '../Offer/Offer';
import Video from '../Video/Video';
import Distributors from '../Distributors/Distributors';
import EmailContact from '../EmailContact/EmailContact';

function Home() {
  return (
    <div>
      <Herosection/>
      <Diper/>
      <Gif/>
      <Pad/>
      <Benfit/>
      <Offer/>
      <Video/>
      <Distributors/>
      <EmailContact/>
    </div>
  )
}

export default Home