import { useId, useState } from 'react'
import './Accordion.css'

function AccordionItem({ id, title, description, children, isOpen, onToggle, panelId, headerId }) {
  return (
    <div className="accordion__item">
      <button
        id={headerId}
        aria-controls={panelId}
        aria-expanded={isOpen}
        className={`accordion__trigger ${isOpen ? 'accordion__trigger--open' : ''}`}
        onClick={onToggle}
        type="button"
      >
        <div className="accordion__summary">
          <span className="accordion__title">{title}</span>
          {description && <span className="accordion__description">{description}</span>}
        </div>
        <svg
          className={`accordion__icon ${isOpen ? 'accordion__icon--open' : ''}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6 9.5L12 15.5L18 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={`accordion__panel ${isOpen ? 'accordion__panel--open' : ''}`}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  )
}

function Accordion({ items = [], allowMultiple = false, defaultOpenIndex = 0 }) {
  const baseId = useId().replace(/[:.]/g, '-')
  const initialOpenIndexes = Array.isArray(defaultOpenIndex)
    ? defaultOpenIndex.filter((value) => typeof value === 'number')
    : typeof defaultOpenIndex === 'number'
    ? [defaultOpenIndex]
    : []

  const [openIndexes, setOpenIndexes] = useState(initialOpenIndexes)

  const toggleItem = (index) => {
    setOpenIndexes((current) => {
      const isOpen = current.includes(index)
      if (allowMultiple) {
        return isOpen ? current.filter((value) => value !== index) : [...current, index]
      }
      return isOpen ? [] : [index]
    })
  }

  return (
    <div className="accordion" data-component="accordion">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)
        const panelId = `accordion-${baseId}-panel-${index}`
        const headerId = `accordion-${baseId}-header-${index}`

        return (
          <AccordionItem
            key={item.title || index}
            id={baseId}
            title={item.title}
            description={item.description}
            isOpen={isOpen}
            onToggle={() => toggleItem(index)}
            panelId={panelId}
            headerId={headerId}
          >
            {item.content}
          </AccordionItem>
        )
      })}
    </div>
  )
}

export default Accordion
