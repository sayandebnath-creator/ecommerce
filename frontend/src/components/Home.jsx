import React from 'react'
import LatestProducts from "./common/LatestProducts";
import FeaturedProducts from "./common/FeaturedProducts";
import HeroSection from './common/HeroSection';
import Layout from './common/Layout';

const Home = () => {
  return (
    <>
    <Layout>

    <HeroSection/>

      <LatestProducts/>

      <FeaturedProducts/>

    </Layout>

    </>
  )
}

export default Home
