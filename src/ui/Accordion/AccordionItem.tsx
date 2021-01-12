import { useState } from 'react'
import { AccordionItemType } from 'src/ui/Accordion/types'
import css from './Accordion.module.scss'

const AccordionItem = ({ content, title, openFirst, changeOpenBlock }: AccordionItemType) => {
  const [opened, setOpend] = useState(openFirst || false)

  const toggle = () => {
    setOpend(!opened)
    if (typeof changeOpenBlock === 'function') {
      changeOpenBlock()
    }
  }

  return (
    <div className={opened ? `${css.accordionItem} ${css.opened}` : css.accordionItem}>
      <div className={css.line} onClick={toggle}>
        <h3 className={css.title}>{title}</h3>
        <span className={css.icon} />
      </div>

      <div className={css.inner}>
        <div className={css.content}>{content}</div>
      </div>
    </div>
  )
}

export default AccordionItem
