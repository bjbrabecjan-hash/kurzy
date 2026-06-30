import { useEffect, useState } from 'react'
import { Guide } from './components/Guide'
import { LanguageSwitch } from './components/LanguageSwitch'
import { ArrowIcon, CardIcon, CompassIcon, ExternalIcon, MailIcon, PassportIcon, ShieldIcon } from './components/Icons'
import { copy, type Language } from './data/content'

const OFFICIAL_INFO = 'https://kurzy.frs.gov.cz/en/introductory-information'

function App() {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('course-guide-language') as Language) || 'tl')
  const [guideOpen, setGuideOpen] = useState(false)
  const [stepIndex, setStepIndex] = useState(() => Number(localStorage.getItem('course-guide-step') || 0))
  const t = copy[language]

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('course-guide-language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('course-guide-step', String(stepIndex))
  }, [stepIndex])

  const closeGuide = () => {
    setGuideOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const completeGuide = () => {
    setStepIndex(0)
    setGuideOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <button className="brand" onClick={closeGuide} aria-label="Course Guide home">
          <CompassIcon />
          <span>Course Guide</span>
        </button>
        <LanguageSwitch language={language} onChange={setLanguage} />
      </header>

      {guideOpen ? (
        <Guide language={language} stepIndex={stepIndex} onStepChange={setStepIndex} onClose={closeGuide} onComplete={completeGuide} />
      ) : (
        <main id="main-content">
          <section className="hero">
            <div className="hero-copy">
              <h1>{t.headline}</h1>
              <p>{t.subhead}</p>
              <div className="hero-actions">
                <button className="button primary" onClick={() => setGuideOpen(true)}>
                  {stepIndex > 0 ? (language === 'tl' ? 'Ipagpatuloy ang gabay' : 'Continue the guide') : t.start}
                  <ArrowIcon />
                </button>
                <a href="https://kurzy.frs.gov.cz/en" target="_blank" rel="noreferrer">
                  {t.official} <ExternalIcon />
                </a>
              </div>
              <div className="step-count"><span>✓</span><strong>{t.steps}</strong></div>
            </div>
            <div className="hero-art">
              <img src="/assets/course-guide-hero.png" alt={language === 'tl' ? 'Lalaking may hawak na ePKP card at passport' : 'A man holding an ePKP card and passport'} />
            </div>
          </section>

          <section className="prepare-section">
            <h2>{t.prepare}</h2>
            <div className="prepare-list">
              <article><span><CardIcon /></span><div><h3>ePKP card</h3><p>{language === 'tl' ? 'Biometric residence card' : 'Your biometric residence card'}</p></div></article>
              <article><span><PassportIcon /></span><div><h3>Passport</h3><p>{language === 'tl' ? 'Valid travel document' : 'Your valid travel document'}</p></div></article>
              <article><span><MailIcon /></span><div><h3>Email and phone</h3><p>{language === 'tl' ? 'Para sa confirmations' : 'For confirmations and updates'}</p></div></article>
            </div>
          </section>

          <section className="privacy-section">
            <ShieldIcon size={30} />
            <div><h2>{t.privacyTitle}</h2><p>{t.privacy}</p></div>
          </section>

          <footer>
            <p>{t.updated}</p>
            <a href={OFFICIAL_INFO} target="_blank" rel="noreferrer">{t.source} <ExternalIcon /></a>
            <p className="disclaimer">{language === 'tl' ? 'Independent guide. Hindi ito official website ng Ministry of the Interior.' : 'Independent guide. This is not an official Ministry of the Interior website.'}</p>
          </footer>
        </main>
      )}
    </>
  )
}

export default App
