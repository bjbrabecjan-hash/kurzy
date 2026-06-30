import type { Language } from '../data/content'

type Props = {
  language: Language
  onChange: (language: Language) => void
}

export function LanguageSwitch({ language, onChange }: Props) {
  return (
    <div className="language-switch" role="group" aria-label="Language">
      <button className={language === 'tl' ? 'active' : ''} onClick={() => onChange('tl')} aria-pressed={language === 'tl'}>
        Tagalog
      </button>
      <span aria-hidden="true" />
      <button className={language === 'en' ? 'active' : ''} onClick={() => onChange('en')} aria-pressed={language === 'en'}>
        English
      </button>
    </div>
  )
}
