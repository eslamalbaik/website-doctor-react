import React from 'react'
import Hero from './components/Hero.jsx'
import Best from './components/Best.jsx'
import Appointment from './components/Appointment.jsx'
import Map from './components/Map.jsx'
import Services from './components/Services.jsx'
const Main = () => {
  return (
    <>
      <Hero />
      <div id='section1' ></div>
      <Best />
      <Appointment />
      <Services />
      <Map />
    </>
  )
}

export default Main