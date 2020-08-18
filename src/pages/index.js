import React from "react"
import Layout from '../components/layout'
import ClippedSection from '../components/landing/clippedSection'
import Testimonial from '../components/landing/testimonial'
import Cards from '../components/landing/cards'
import Figures from '../components/landing/figures'
import Videos from '../components/landing/videos'



export default function Home() {
  return (
    <Layout>
      <ClippedSection />
      <Testimonial />
      <Cards />
      <Testimonial reversed/>
      <Figures/>
      <Videos />
    </Layout>
  );
}
