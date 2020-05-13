import "./SignupForm.css"
import React, { useState } from "react"

const langStrings = {
  btnReady: {
    en: "Submit",
    es: "Enviar",
  },
  btnSubmitting: {
    en: "Submitting...",
    es: "Enviando...",
  },
  emailLabel: {
    en: "Email",
    es: "Correo electrónico",
  },
  emailPlaceholder: {
    en: "hi@google.com",
    es: "hola@google.com",
  },
  errorMessage: {
    en: "Something went wrong!",
    es: "¡Había un error!",
  },
  success: {
    en: "Great! Please check your inbox to confirm your email address!",
    es:
      "¡Bien! Por favor, revisa tu buzón de correo electrónico para confirmar tu correo electrónico.",
  },
}

function SignupForm({ lang = "en" }) {
  const [status, setStatus] = useState({
    submitted: false,
    response: null,
    errorMessage: null,
  })
  const [email, setEmail] = useState("")
  const buttonText =
    status.submitted && !status.response
      ? langStrings["btnSubmitting"][lang]
      : langStrings["btnReady"][lang]

  async function handleSubmit(evt) {
    evt.preventDefault()
    setStatus({ submitted: true, response: null, errorMessage: null })
    const body = JSON.stringify({
      api_key: process.env.GATSBY_CONVERTKIT_PUBLIC_KEY,
      email,
      fields: {
        lang,
      },
    })

    try {
      const response = await fetch(
        "https://api.convertkit.com/v3/forms/1365805/subscribe",
        {
          method: "POST",
          body,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )

      const json = await response.json()
      let status = { submitted: true, response: json, errorMessage: null }
      let updatedEmail = ""

      if (json.error) {
        const errorMessage = langStrings["errorMessage"][lang]
        status = { submitted: false, response: null, errorMessage }
        updatedEmail = email
      }

      setStatus(status)
      setEmail(updatedEmail)
    } catch (err) {
      const errorMessage = langStrings["errorMessage"][lang]
      setStatus({ submitted: false, response: null, errorMessage })
    }
  }

  return (
    <div className="signup-form">
      {!(status.response && status.response.subscription) && (
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label>
              <span className="label">{langStrings["emailLabel"][lang]}</span>
              <input
                type="email"
                name="email"
                placeholder={langStrings["emailPlaceholder"][lang]}
                value={email}
                onChange={evt => setEmail(evt.target.value)}
                required
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={(status.submitted && !status.response) || !email}
          >
            {buttonText}
          </button>
        </form>
      )}
      {status.errorMessage && <p className="message">{status.errorMessage}</p>}
      {status.response && status.response.subscription && (
        <p className="message success">{langStrings["success"][lang]}</p>
      )}
    </div>
  )
}

export default SignupForm
