import { useState } from 'react'
import './App.css'

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1OkDvYiZROUQtn_i57Pv585lww4Y9A5kUK-KsUuv3o74/edit?usp=sharing'

const APPS_SCRIPT_URL =
  import.meta.env.VITE_APPS_SCRIPT_URL?.trim() || 'PASTE_YOUR_APPS_SCRIPT_WEBAPP_URL_HERE'

const categories = [
  'Respuesta incorrecta',
  'Informacion inventada',
  'Error tecnico',
  'No ha entendido la pregunta',
  'Respuesta incompleta',
  'Otro',
]

const examples = [
  'Copiad el mensaje del bot tal cual para poder reproducirlo.',
  'Si sabeis cual era la respuesta correcta, ponedla en el campo de abajo.',
  'No hace falta dejar nombre ni telefono. El formulario es anonimo.',
]

const initialForm = {
  category: categories[0],
  prompt: '',
  botReply: '',
  expectedReply: '',
}

function App() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const endpointReady =
    APPS_SCRIPT_URL.startsWith('https://script.google.com/') ||
    APPS_SCRIPT_URL.startsWith('https://script.googleusercontent.com/')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const redirectToSheet = () => {
    window.location.href = SHEET_URL
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!endpointReady) {
      setStatus('error')
      setErrorMessage(
        'Falta conectar el endpoint de Google Sheets. Anade la URL del Web App en VITE_APPS_SCRIPT_URL antes de publicar.',
      )
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          category: formData.category,
          prompt: formData.prompt.trim(),
          botReply: formData.botReply.trim(),
          expectedReply: formData.expectedReply.trim(),
          source: 'telegram-beta-feedback-form',
          submittedAt: new Date().toISOString(),
          userAgent: window.navigator.userAgent,
        }),
      })

      setStatus('success')
      setFormData(initialForm)
      window.setTimeout(redirectToSheet, 1800)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Ha habido un problema al enviar el formulario.',
      )
    }
  }

  return (
    <div className="page-shell">
      <main className="feedback-layout">
        <section className="hero-panel">
          <p className="eyebrow">Beta feedback</p>
          <h1>Ayudanos a mejorar el chatbot de Telegram</h1>
          <p className="hero-copy">
            Estamos presentando una version beta en el evento. Si detectas una
            respuesta incorrecta, un error tecnico o cualquier comportamiento raro,
            dejanoslo aqui de forma anonima.
          </p>

          <div className="hero-card">
            <p className="hero-card-label">Que necesitamos</p>
            <ul className="tips-list">
              {examples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-footer">
            <a className="secondary-link" href={SHEET_URL} target="_blank" rel="noreferrer">
              Ver hoja de respuestas
            </a>
            <p className="privacy-note">
              No recogemos datos personales en este formulario.
            </p>
          </div>
        </section>

        <section className="form-panel" aria-labelledby="feedback-title">
          <div className="form-header">
            <p className="form-kicker">Formulario anonimo</p>
            <h2 id="feedback-title">Reportar una incidencia</h2>
            <p>
              Cuanto mas concreto sea el ejemplo, mas facil sera corregir el
              comportamiento del bot.
            </p>
          </div>

          <form className="feedback-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Tipo de error</span>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Que le habias preguntado al bot</span>
              <textarea
                name="prompt"
                value={formData.prompt}
                onChange={handleChange}
                rows="4"
                placeholder="Ejemplo: Le pregunte como recuperar el acceso y me dijo..."
                required
              />
            </label>

            <label className="field">
              <span>Respuesta o error que te ha dado</span>
              <textarea
                name="botReply"
                value={formData.botReply}
                onChange={handleChange}
                rows="6"
                placeholder="Pega aqui el mensaje exacto del chatbot o describe el fallo."
                required
              />
            </label>

            <label className="field">
              <span>Que crees que deberia haber respondido</span>
              <textarea
                name="expectedReply"
                value={formData.expectedReply}
                onChange={handleChange}
                rows="5"
                placeholder="Opcional, pero muy util para mejorar el sistema."
              />
            </label>

            <button className="submit-button" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Enviando...' : 'Enviar incidencia'}
            </button>

            {status === 'success' ? (
              <p className="status-message success">
                Gracias. Hemos guardado la incidencia y te redirigimos a la hoja de
                respuestas.
              </p>
            ) : null}

            {status === 'error' ? (
              <p className="status-message error">{errorMessage}</p>
            ) : null}
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
