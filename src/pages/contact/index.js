import React from "react";
import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";


export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="bg-blue-grey-050 pt-10">
          <div className="flex flex-col items-center">
            <h1 className="font-serif text-blue-grey-900 text-2xl sm:text-4xl">
              Contact
            </h1>
            <div className="w-full max-w-xs sm:max-w-sm px-4 pb-16 mt-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
