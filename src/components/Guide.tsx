import type { Language } from '../data/content'
import { copy, steps } from '../data/content'
import { ArrowIcon, CheckIcon, ExternalIcon, ShieldIcon } from './Icons'

type Props = {
  language: Language
  stepIndex: number
  onStepChange: (step: number) => void
  onClose: () => void
  onComplete: () => void
}

export function Guide({ language, stepIndex, onStepChange, onClose, onComplete }: Props) {
  const step = steps[stepIndex]
  const t = copy[language]
  const isLast = stepIndex === steps.length - 1

  const next = () => {
    if (isLast) {
      onComplete()
      return
    }
    onStepChange(stepIndex + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="guide-shell" id="main-content">
      <aside className="step-rail" aria-label={language === 'tl' ? 'Mga hakbang' : 'Guide steps'}>
        <p>{language === 'tl' ? 'Iyong progress' : 'Your progress'}</p>
        <ol>
          {steps.map((item, index) => (
            <li key={item.shortTitle.en} className={index === stepIndex ? 'current' : index < stepIndex ? 'complete' : ''}>
              <button onClick={() => onStepChange(index)} aria-current={index === stepIndex ? 'step' : undefined}>
                <span className="step-number">{index < stepIndex ? <CheckIcon size={16} /> : index + 1}</span>
                <span>{item.shortTitle[language]}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="privacy-mini"><ShieldIcon /><span>{language === 'tl' ? 'Walang personal na data' : 'No personal data'}</span></div>
      </aside>

      <section className="step-content" aria-live="polite">
        <div className="mobile-progress" aria-hidden="true">
          <span>{stepIndex + 1} / {steps.length}</span>
          <div><i style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }} /></div>
        </div>

        <p className="step-label">{language === 'tl' ? 'Hakbang' : 'Step'} {stepIndex + 1} / {steps.length}</p>
        <h1>{step.title[language]}</h1>
        <p className="step-intro">{step.intro[language]}</p>

        <ul className="instruction-list">
          {step.bullets[language].map((bullet) => (
            <li key={bullet}><span><CheckIcon /></span><p>{bullet}</p></li>
          ))}
        </ul>

        {step.note && <div className="note"><ShieldIcon /><p>{step.note[language]}</p></div>}

        {step.link && (
          <a className="official-action" href={step.link.href} target="_blank" rel="noreferrer">
            {step.link.label[language]} <ExternalIcon />
          </a>
        )}

        <div className="guide-actions">
          <button className="button secondary" onClick={() => stepIndex === 0 ? onClose() : onStepChange(stepIndex - 1)}>
            {t.back}
          </button>
          <button className="button primary" onClick={next}>
            {isLast ? t.done : t.continue} <ArrowIcon />
          </button>
        </div>
      </section>
    </main>
  )
}
