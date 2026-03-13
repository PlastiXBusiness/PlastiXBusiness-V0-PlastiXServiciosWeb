import { useState } from 'react'
import './App.css'

const countries = [
  { code: '+34', flag: '🇪🇸', name: 'España' },
  { code: '+52', flag: '🇲🇽', name: 'México' },
  { code: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: '+51', flag: '🇵🇪', name: 'Perú' },
  { code: '+1', flag: '🇺🇸', name: 'Estados Unidos' },
]

const highlights = [
  {
    title: 'Acceso',
    description: 'Migración de cuenta a Corsair Connect (si no se ha hecho previamente)',
    icon: 'key',
  },
  {
    title: 'Estado',
    description: 'Configuración total de tu cuenta con onboarding incluido.',
    icon: 'pulse',
  },
  {
    title: 'Activos',
    description: 'Control y cálculo exacto de tus créditos de plástico.',
    icon: 'wallet',
  },
  {
    title: 'Gestión',
    description: 'Configuración de seguridad para tus créditos de plástico.',
    icon: 'shield',
  },
]

const solutionItems = [
  'Auditoría completa de tu cuenta y activos',
  'Migración técnica sin interrupciones',
  'Verificación de identidad (KYC técnico)',
  'Visibilidad total de tus créditos de plástico',
  'Proceso guiado sin complicaciones',
  'Información al día de noticias y cambios',
]

const plans = [
  {
    title: 'Análisis y Configuración',
    price: '50€',
    detail: 'Pago único',
    items: [
      'Análisis de situación',
      'Recuperación de acceso',
      'Migración técnica',
      'Verificación técnica',
      'Comprobación de créditos de plástico',
    ],
    note:
      'Cuenta preparada y operativa, con total conocimiento de cuántos créditos de plástico tienes y dónde los tienes.',
  },
  {
    title: 'Gestión Activa',
    detailTop: 'Extensión del plan anterior',
    requirement: 'Requiere haber contratado Análisis y Configuración (50€)',
    price: '27€',
    detail: '/ mes',
    featured: true,
    items: [
      'Seguimiento de actualizaciones del sistema',
      'Gestión activa de cuenta',
      'Soporte prioritario',
      'Asistencia técnica continua',
      'Información sobre cambios en la plataforma',
      'Control de tus créditos de plástico',
      'Ayuda a la hora de vender o comprar',
      'Avisos de estado del mercado y precio',
    ],
  },
]

const whatsappNumber = '34694200966'
const defaultCountry = countries[0]

function HighlightIcon({ icon }) {
  if (icon === 'key') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 3a7 7 0 1 0 4.95 11.95L21 17v2h-2v2h-3v-3.17l-1.05-1.05A7 7 0 0 0 14 3Zm0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z" />
      </svg>
    )
  }

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
    service: 'Análisis y Configuración (50€ - Pago único)',
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
      `Nombre: ${formData.name}`,
      `WhatsApp / Teléfono: ${formData.countryCode}${formData.phone}`,
      `Servicio de interés: ${formData.service}`,
      `Mensaje sobre mi situación: ${formData.message}`,
    ].join('\n')

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-name">PlastiX</span>
        </a>

        <nav className="main-nav" aria-label="Principal">
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-cta" href="#contacto">
          Contactar
        </a>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="hero-grid"></div>
          <div className="hero-glow hero-glow-right"></div>
          <div className="hero-glow hero-glow-left"></div>

          <div className="hero-content">
            <span className="section-chip">Gestión Técnica Profesional</span>
            <h1>
              Ten todos tus <span>créditos de plástico</span> bajo control con{' '}
              <em>PlastiX</em>
            </h1>
            <p>
              Si posees créditos de plástico en Amplivo desde hace años, te ayudamos
              a recuperar el acceso, realizar la migración técnica y asegurar tu
              cuenta de forma profesional.
            </p>
            <a className="hero-button" href="#servicios">
              Ver más
            </a>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="panel-card panel-card-top">
              <span>Gestión Técnica Profesional</span>
              <strong>Recuperación, migración y seguridad de tus créditos de plástico.</strong>
            </div>
            <div className="panel-card panel-card-bottom">
              <span>PlastiX</span>
              <strong>Control total y visibilidad completa de tu cuenta.</strong>
            </div>
          </div>
        </section>

        <section className="section light-section">
          <div className="section-heading center">
            <h2>Necesitas tener todo configurado, bajo control y al día?</h2>
            <div className="heading-line"></div>
          </div>

          <div className="highlights-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <div className="highlight-icon">
                  <HighlightIcon icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section solution-section">
          <div className="section-heading center narrow">
            <span className="section-label">La Solución</span>
            <h2>Expertos en el modelo Corsair Connect</h2>
            <p>
              Nuestro servicio se encarga de todo el proceso técnico para que puedas
              volver a tener control total sobre tus créditos de plástico. Nos
              ocupamos de la auditoría, migración técnica, verificación de identidad
              y visibilidad completa, todo sin complicaciones para ti.
            </p>
          </div>

          <ul className="solution-grid">
            {solutionItems.map((item) => (
              <li className="solution-item" key={item}>
                <span className="solution-check">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section pricing-section" id="servicios">
          <div className="section-heading center">
            <span className="section-label accent">Servicios y Tarifas</span>
            <h2>Elige tu plan de gestión técnica</h2>
            <div className="heading-line accent-line"></div>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`pricing-card${plan.featured ? ' pricing-card-featured' : ''}`}
                key={plan.title}
              >
                {plan.featured && <div className="badge">Recomendado</div>}
                <h3>{plan.title}</h3>
                {plan.detailTop && <p className="plan-top-copy">{plan.detailTop}</p>}
                {plan.requirement && <p className="plan-requirement">{plan.requirement}</p>}
                <div className="price-block">
                  <span className="price">{plan.price}</span>
                  <span className="price-detail">{plan.detail}</span>
                </div>
                <div className="plan-divider"></div>
                <ul className="plan-list">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {plan.note && <p className="plan-note">{plan.note}</p>}
              </article>
            ))}
          </div>

          <div className="pricing-action">
            <a className="hero-button solid" href="#contacto">
              Contactar ahora
            </a>
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="section-heading center narrow">
            <span className="section-label">Contacto</span>
            <h2>Contáctanos</h2>
            <p>
              Solo responderemos consultas relacionadas con el servicio de gestión
              técnica.
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
                placeholder="Tu nombre completo"
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
              <span>Tipo de servicio</span>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="Análisis y Configuración (50€ - Pago único)">
                  Análisis y Configuración (50€ - Pago único)
                </option>
                <option value="Gestión Activa (27€/ mes) + Análisis y Configuración (50€ - Pago único)">
                  Gestión Activa (27€/ mes) + Análisis y Configuración (50€ - Pago único)
                </option>
              </select>
            </label>

            <label className="field">
              <span>Mensaje sobre tu situación</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe brevemente tu situación con la cuenta..."
                rows="4"
                required
              />
            </label>

            <button className="whatsapp-button" type="submit">
              Enviar por WhatsApp
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
            <p>Gestión Técnica Profesional</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>

        <div className="footer-legal">
          <p>
            <strong>AVISO LEGAL:</strong> Este servicio es exclusivamente de
            asistencia técnica y gestión operativa de cuentas. En ningún caso
            constituye consejo de inversión ni gestión activa de capital. No
            realizamos asesoramiento financiero ni gestión de fondos de terceros.
          </p>
        </div>

        <div className="footer-copy">
          <p>© 2026 PlastiX. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
