import React from "react"
import {
  Layout,
  Seo,
  Services,
  Hero,
  About,
  Team,
  AltContact,
  Faq,
  IconGrid,
  Testimonial,
  Features,
  getMetadata,
} from "@teefe/gatsby-theme-luden"

// DATA
import iconGridData from "../gatsby-theme-luden/data/iconGridData"
import servicesData from "../gatsby-theme-luden/data/servicesData"
import hero from "../gatsby-theme-luden/data/heroData"
import about from "../gatsby-theme-luden/data/aboutData"
import team from "../gatsby-theme-luden/data/teamData"
import contact from "../gatsby-theme-luden/data/contactData"
import faq from "../gatsby-theme-luden/data/faqData"
import testimonial from "../gatsby-theme-luden/data/testimonialData"
import featuresData from "../gatsby-theme-luden/data/featuresData"

const Home = () => {
  const title = getMetadata().meta.siteMetadata.seoTitle
  const form = getMetadata().meta.siteMetadata.form
  const svgImgs = getMetadata().meta.siteMetadata.svgImgs
  const attach = getMetadata().meta.siteMetadata.attach
  const anchor = getMetadata().meta.siteMetadata.anchor
  const wave = getMetadata().meta.siteMetadata.wave
  const triangle = getMetadata().meta.siteMetadata.triangle
  const tilt = getMetadata().meta.siteMetadata.tilt
  const curve = getMetadata().meta.siteMetadata.curve

  return (
    <Layout
      anchor={anchor}
      transparent={!svgImgs}
      light
      sticky
      rounded="true"
      icons
    >
      <Seo title={title} />
      <Hero
        data={hero}
        full={!svgImgs}
        bg={!svgImgs}
        svg={svgImgs}
        attach={attach}
        center
        home={!svgImgs}
        side
        rounded="true"
      />
      {!anchor && (
        <Testimonial
          // bg
          tilt={tilt}
          wave={wave}
          curve={curve}
          triangle={triangle}
          data={testimonial}
          rounded="true"
          shadow="true"
          star
        />
      )}
      {anchor && (
        <About
          anchor={about.anchor}
          data={about}
          rounded="true"
          shadow="true"
          tilt={tilt}
          wave={wave}
          curve={curve}
          triangle={triangle}
        />
      )}
      <IconGrid
        bg
        thick
        smallP
        data={iconGridData}
        tilt={tilt}
        wave={wave}
        curve={curve}
        triangle={triangle}
      />
      {anchor && (
        <Services
          data={servicesData}
          box
          thick
          large
          shadow="true"
          rounded="true"
          tilt={tilt}
          wave={wave}
          curve={curve}
          triangle={triangle}
        />
      )}
      {anchor && (
        <Team
          data={team}
          bg
          tilt={tilt}
          wave={wave}
          curve={curve}
          triangle={triangle}
          thick
          rounded="true"
          shadow="true"
        />
      )}
      {anchor && <Faq data={faq} center />}
      {anchor && (
        <Testimonial
          // bg
          tilt={tilt}
          wave={wave}
          curve={curve}
          triangle={triangle}
          data={testimonial}
          rounded="true"
          shadow="true"
          star
        />
      )}
      {!anchor && (
        <Features
          data={featuresData}
          thick
          large
          shadow="true"
          rounded="true"
          tilt={tilt}
          wave={wave}
          curve={curve}
          triangle={triangle}
        />
      )}
      {form ? (
        <AltContact
          data={contact}
          image={!svgImgs}
          rounded="true"
          attach={contact.attach}
          thick
          form
          svgImgs={svgImgs}
        />
      ) : (
        <AltContact
          data={contact}
          image={!svgImgs}
          rounded="true"
          attach={attach}
          thick
          svgImgs={svgImgs}
          tilt={tilt}
          wave={wave}
          curve={curve}
          triangle={triangle}
        />
      )}
    </Layout>
  )
}

export default Home
