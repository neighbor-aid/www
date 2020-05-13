import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"
import SEO from "../components/seo"
import SignupForm from "../components/signup-form"

const IndexPage = () => {
  return (
    <div className={styles.wrapper}>
      <SEO title="Join Us" />
      <h1 className={styles.header}>
        Neighbor Aid
        <Link to="/es" className={styles.langToggle}>
          ¿Prefieres español?
        </Link>
      </h1>
      <h2>
        Our mission: to help local communities re-distribute money in the face
        of financial crisis.
      </h2>
      <p>
        Neighbor Aid is a not-for-profit web app that makes it easy for
        community members to stand in solidarity and financially support one
        another in times of need.
      </p>
      <p>
        To learn more, and be notified when we launch, submit your email below.
      </p>
      <SignupForm />
      <p className={styles.interested}>
        Interested in getting involved with the project?{" "}
        <a href="mailto:hello@neighboraid.co">Let us know!</a>
      </p>
    </div>
  )
}

export default IndexPage
