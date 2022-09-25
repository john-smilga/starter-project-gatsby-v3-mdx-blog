import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return <Layout>
    <section className="newsletter-page">
      <div className="page-center">

        <h2>Test</h2>
        <form className="contact-form">
          <input
          type="text"
          name="name"
          placeholder="Your name"
          className="form-control"
          />
           <input
          type="email"
          name="email"
          placeholder="Your email"
          className="form-control"
          />
          <button type="submit" className="btn form-control submit-btn">
            subscribe
          </button>
</form>

      </div>
      </section>




  </Layout>
}

export default NewsLetter
