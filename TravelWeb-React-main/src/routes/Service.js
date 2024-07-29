import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceImg from '../assets/3.jpg'
import Footer from '../components/Footer';
import Trip from '../components/Trip';

export default function Service() {
  return (
        <>
        <Navbar/>
        <Hero
      cName='hero-mid'
      heroImg={ServiceImg}
      title='Service'
      url='/'
      btnClass=''hide
      />  
      <Trip/>
      <Footer/>
        </>
  );
}