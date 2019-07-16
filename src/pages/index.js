import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="faq-container">
      <div class="faq">
        <h2>
          Don't see your question here? You can always email us at{" "}
          <a href="mailto:alexa@brighten.in">alexa@brighten.in</a> with any
          questions! We love hearing from you :){" "}
        </h2>

        <h3> What is Moodboost? </h3>
        <p>
          Post your link on your snap story or in your instagram bio when you
          need a moodboost. Your friends can then send you anonymous messages
          using that link. See what they wrote and reply in the app!
        </p>
        <h3> How do I get my link?</h3>
        <p>
          Use the button on the settings page to copy your link to your
          clipboard. You can also use the button on the main screen to post a
          sticker to your snap story.
        </p>

        <h3> I heard it can magically detect when I smile?</h3>
        <p>Impossible. Or is it? Go to settings to turn it on.</p>

        <h3>Does the smile camera take/save photos or videos?</h3>
        <p>Nope. Never. Nothing is ever saved or stored anywhere.</p>

        <h3> Why do I have to log in with IG? </h3>
        <p>
          Do you really want to have to remember another password? Plus, after
          you login with IG you can chat anonymously in the app.
        </p>

        <h3> How do I send stuff? </h3>
        <p>Search for a name in the app or use their link!</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
