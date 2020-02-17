import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <section
      className="bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        height: `26rem`
      }}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-blue-grey-050 text-3xl sm:text-5xl px-4 py-2">
          {title}
        </h1>
        <h3 className="text-blue-grey-050 text-lg sm:text-xl px-2 py-1 mt-5">
          {subheading}
        </h3>
        <Link
          className="text-blue-grey-050 hover:text-blue-grey-900 bg-blue-grey-900 hover:bg-white mt-8 px-8 py-2"
          to="/contact"
        >
          Free Consultation
        </Link>
      </div>
    </section>

    <section className="max-w-4xl text-blue-grey-900 text-center mx-auto px-4 py-16">
      <h2 className="font-serif text-blue-grey-900 text-2xl sm:text-4xl">
        About Winberg LLC
      </h2>

      <div className="flex flex-col sm:flex-row mt-10">

        <div className="bg-white shadow-lg mx-1 px-2 py-10">
          <h3 className="font-serif text-lg sm:text-xl">
            Trusted Legal Support
          </h3>
          <p className="italic mt-5">
            We know that this can sometimes be a difficult and overwhelming
            process. We are dedicated to guiding you towards a strategic legal
            solution.{" "}
          </p>
        </div>

        <div className="bg-white shadow-lg mx-1 px-2 py-10 mt-10 sm:mt-0">
          <h3 className="font-serif text-lg sm:text-xl">
            Focus on Real Results
          </h3>
          <p className="italic mt-5">
            The first step is for us to work with you and develop a plan
            tailored specifically for your needs. Through our understanding of
            the law and your understanding of the circumstances, we will search
            for an equitable solution.
          </p>
        </div>

        <div className="bg-white shadow-lg mx-1 px-2 py-10 mt-10 sm:mt-0">
          <h3 className="font-serif text-lg sm:text-xl">Get Started Today</h3>
          <p className="italic mt-5">
            Contact us for a free phone consultation. The sooner you have a plan
            of action, the better your chances of taking the correct steps to
            get the results you want. Se Habla Espanol.{" "}
          </p>
        </div>
      </div>
    </section>

    {/* <section className="bg-gray-100 py-16">
      <div className="flex flex-col justify-center items-center px-4">
        <h1 className="font-bold text-blue-grey-200 text-xl">
          {mainpitch.title}
        </h1>
        <h3 className="text-blue-grey-200 text-lg mt-2">
          {mainpitch.description}
        </h3>
      </div>

      <div className="flex flex-col items-center border-b border-blue-grey-900 px-4 pb-16 mt-10">
        <h3 className="font-semibold text-blue-grey-200 text-lg">{heading}</h3>
        <p className="leading-relaxed text-blue-grey-200 text-center max-w-lg mt-4">
          {description}
        </p>
      </div>

      <Features gridItems={intro.blurbs} />

      <div className="flex flex-col items-center mt-20">
        <h3 className="font-bold text-blue-grey-200 text-lg sm:text-xl tracking-wide uppercase">
          Latest stories
        </h3>

        <BlogRoll />

        <Link
          className="font-semibold text-gray-100 sm:text-lg bg-blue-500 px-4 py-2 sm:px-5 sm:py-3 rounded mt-10 hover:bg-blue-600 focus:bg-blue-600"
          to="/blog"
        >
          Read More
        </Link>
      </div>
    </section> */}
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
