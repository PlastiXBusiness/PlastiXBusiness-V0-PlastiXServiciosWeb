import { useState } from 'react'
import './App.css'

const countries = [
  { code: '+34', flag: '🇪🇸', name: 'España' },
  { code: '+52', flag: '🇲🇽', name: 'México' },
  { code: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: '+351', flag: 'PT', name: 'Portugal' },
  { code: '+1', flag: '🇺🇸', name: 'Estados Unidos' },
]

const audienceItems = [
  "Si tienes CSR's desde hace tiempo y quieres tenerlo todo claro",
  "Si no tienes claro cuántos CSR's tienes o dónde están",
  'Si te da miedo equivocarte con billeteras o exchanges',
  'Si quieres dejarlo listo y olvidarte',
]

const benefitCards = [
  {
    title: 'Te decimos cuánto tienes',
    description: "Vemos cuántos CSR/CSR25/CSR26 tienes y dónde están.",
    example: "Así no vuelves a estar con 'creo que tengo X…'.",
    icon: 'wallet',
  },
  {
    title: 'Dejamos tu cuenta lista',
    description:
      'Revisamos contigo la verificación KYC y lo dejamos preparado para que no se atasque cuando lo necesites.',
    example: "El típico 'me falta un paso'… lo evitamos.",
    icon: 'pulse',
  },
  {
    title: 'Lo dejamos todo seguro',
    description:
      'Activamos y revisamos 2FA y seguridad para que no pierdas el acceso y puedas hacer retiros.',
    example: 'Nada de sustos de retiros bloqueados.',
    icon: 'shield',
  },
  {
    title: 'Tienes a quién preguntar',
    description:
      '2 horas de consultas incluidas + grupo de WhatsApp con noticias y cambios.',
    example: 'Si mañana cambian algo, te enteras y sabes qué hacer.',
    icon: 'chat',
  },
]

const includeItems = [
  "Te ayudamos a localizar todos tus CSR's y en qué cantidad",
  'Revisión y preparación del KYC (si aplica)',
  'Seguridad: 2FA + recomendaciones + recuperación',
  '2 horas de consultas para tus dudas',
  'Grupo de WhatsApp con noticias y cambios importantes',
  'Acceso anticipado a recursos internos (documentos, investigación, normativas explicadas fácil)',
  'Acceso anticipado a herramientas (beta) que lancemos para facilitar la gestión',
]

const steps = [
  'Nos escribes por WhatsApp',
  'Revisamos tu caso contigo y lo dejamos todo listo',
  'Te damos acceso al grupo + recursos + tus 2 horas de consultas',
]

const faqs = [
  {
    question: '¿Esto es asesoría financiera?',
    answer: 'No. Esto es ayuda técnica y operativa para dejar tus CSR’s listos, claros y bien configurados.',
  },
  {
    question: '¿Tengo que saber de blockchain o mercados de cryptomonedas?',
    answer: 'No. La idea es justo la contraria: que no tengas que meterte a aprender todo eso para dejarlo bien hecho.',
  },
  {
    question: '¿Cuánto tardáis?',
    answer: 'Normalmente entre 24 y 72 horas, según el caso y lo que ya tengas hecho.',
  },
  {
    question: '¿Qué incluyen las 2 horas?',
    answer:
      'Incluyen dudas técnicas, operativas, del negocio de Corsair y Corsair Connect, y dudas sobre tus CSR para que no vayas a ciegas.',
  },
  {
    question: '¿El grupo de WhatsApp es soporte 1:1 ilimitado?',
    answer:
      'No. El grupo es para noticias, cambios importantes y dudas generales. El soporte 1:1 va dentro del servicio y de las 2 horas incluidas.',
  },
  {
    question: '¿Qué son los recursos internos?',
    answer:
      'Son documentos y guías que iremos sacando para que entiendas cambios y la evolución de todo sin líos ni tecnicismos raros.',
  },
]

const whatsappNumber = '34694200966'
const defaultCountry = countries[0]
const serviceName = 'Servicio técnico CSR (47€ · pago único)'

function HighlightIcon({ icon }) {
  if (icon === 'pulse') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12h4l2-4l3 8l2-4h7" />
      </svg>
    )
  }

  if (icon === 'wallet') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19v3H6.5a.5.5 0 0 0 0 1H20v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7.5Z" />
        <path d="M20 11h-3a2 2 0 1 0 0 4h3" />
      </svg>
    )
  }

  if (icon === 'chat') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4 4v-4H6.5A2.5 2.5 0 0 1 4 13.5Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-2.7 7.9-7 10c-4.3-2.1-7-5.5-7-10V6l7-3Z" />
      <path d="M9.5 12l1.7 1.7l3.3-3.4" />
    </svg>
  )
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: defaultCountry.code,
    phone: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const text = [
      'Hola, vengo desde la web de PlastiX.',
      `Servicio: ${serviceName}`,
      `Nombre: ${formData.name}`,
      `WhatsApp / Teléfono: ${formData.countryCode}${formData.phone}`,
      `Consulta: ${formData.message}`,
      'Entiendo que el pago se hace por Bizum después y que no hay checkout en la web.',
    ].join('\n')

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-name">PlastiX</span>
        </a>

        <nav className="main-nav" aria-label="Principal">
          <a href="#incluye">Qué incluye</a>
          <a href="#precio">Precio</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-cta" href="#contacto">
          Escríbenos por WhatsApp
        </a>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="hero-grid"></div>
          <div className="hero-glow hero-glow-right"></div>
          <div className="hero-glow hero-glow-left"></div>

          <div className="hero-content">
            <span className="section-chip">Pago único: 47€ · Sin mensualidades</span>
            <h1>
              Deja tus <span>CSR&apos;s listos</span> y seguros (sin comerte la cabeza)
            </h1>
            <p>
              Te ayudamos a saber cuántos tienes y dónde están, dejamos tu cuenta
              preparada (KYC + seguridad) y te damos soporte para que el día que
              necesites hacer algo, no tengas sustos.
            </p>

            <div className="hero-actions">
              <a className="hero-button solid" href="#contacto">
                Escríbenos por WhatsApp
              </a>
              <a className="hero-button" href="#incluye">
                Ver qué incluye
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="panel-card panel-card-top">
              <span>Servicio único</span>
              <strong>Lo dejas listo una vez y sabes a quién escribir si lo necesitas.</strong>
            </div>
            <div className="panel-card panel-card-bottom">
              <span>Sin checkout</span>
              <strong>Nos escribes por WhatsApp y luego te decimos los pasos por Bizum.</strong>
            </div>
          </div>
        </section>

        <section className="section light-section audience-section">
          <div className="section-heading center narrow">
            <span className="section-label">¿Para quién es?</span>
            <h2>Para gente que quiere dejar esto claro, seguro y fuera de su cabeza</h2>
          </div>

          <div className="audience-grid">
            <div className="audience-card">
              <ul className="audience-list">
                {audienceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="audience-card audience-card-muted">
              <span className="mini-title">No es para ti si…</span>
              <p>
                Si buscas consejos de inversión o que te digamos cuándo vender (no
                hacemos eso).
              </p>
            </div>
          </div>
        </section>

        <section className="section light-section">
          <div className="section-heading center">
            <span className="section-label">Qué te llevas</span>
            <h2>Lo importante, explicado fácil</h2>
          </div>

          <div className="highlights-grid">
            {benefitCards.map((item) => (
              <article className="highlight-card" key={item.title}>
                <div className="highlight-icon">
                  <HighlightIcon icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="card-example">{item.example}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section solution-section" id="incluye">
          <div className="section-heading center narrow">
            <span className="section-label">Qué incluye</span>
            <h2>Todo lo necesario para dejarlo bien hecho</h2>
            <p>
              Esto no es para que estés pendiente cada día: es para dejarlo listo y
              saber que tienes soporte cuando de verdad lo necesites.
            </p>
          </div>

          <ul className="solution-grid">
            {includeItems.map((item) => (
              <li className="solution-item" key={item}>
                <span className="solution-check">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section pricing-section" id="precio">
          <div className="section-heading center narrow">
            <span className="section-label accent">Precio</span>
            <h2>47€ (pago único)</h2>
            <p>Sin mensualidades. Nos escribes por WhatsApp y te decimos los pasos.</p>
          </div>

          <div className="single-price-card">
            <span className="single-price-label">Servicio técnico / operativo</span>
            <div className="single-price-value">47€</div>
            <p>
              Te atendemos por WhatsApp, revisamos tu caso y después el pago se hace
              por Bizum. Sin checkout y sin líos raros.
            </p>
            <a className="hero-button solid" href="#contacto">
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>

        <section className="section light-section">
          <div className="section-heading center narrow">
            <span className="section-label">Cómo funciona</span>
            <h2>Así de simple</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step}>
                <span className="step-number">0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section solution-section faq-section">
          <div className="section-heading center narrow">
            <span className="section-label">FAQ</span>
            <h2>Dudas normales antes de escribir</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <article className="faq-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="section-heading center narrow">
            <span className="section-label">Contacto</span>
            <h2>Cuéntanos tu caso y te contestamos por WhatsApp</h2>
            <p>
              Esto es un servicio técnico y operativo. Si te encaja, nos escribes y
              te guiamos sin marearte.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Nombre</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </label>

            <label className="field">
              <span>WhatsApp / Teléfono</span>
              <div className="phone-field">
                <select
                  className="country-select"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  aria-label="País"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.name} ({country.code})
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="611151620"
                  required
                />
              </div>
            </label>

            <label className="field">
              <span>Cuéntanos tu caso</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos rápido: ¿tienes KYC hecho? ¿dónde tienes los CSR? ¿qué es lo que más te preocupa?"
                rows="4"
                required
              />
            </label>

            <button className="whatsapp-button" type="submit">
              Hablar por WhatsApp
            </button>
          </form>
        </section>
      </main>

      <a
        className="floating-whatsapp"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <span>WhatsApp</span>
      </a>

      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <span className="footer-brand">PlastiX</span>
            <p>Servicio técnico CSR · Pago único 47€</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <a href="#incluye">Qué incluye</a>
            <a href="#precio">Precio</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>

        <div className="footer-legal">
          <p>
            Servicio técnico y operativo. No ofrecemos asesoramiento financiero,
            fiscal o legal. No garantizamos resultados económicos. El usuario es
            responsable final de sus decisiones y operaciones.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
