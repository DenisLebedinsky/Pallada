import { useState } from 'react'
import AccordionItem from 'src/ui/Accordion/AccordionItem'
import { AccordionProp } from 'src/ui/Accordion/types'
import css from './Accordion.module.scss'

const Accordion = ({ list, className }: AccordionProp) => {
  const [openFirst, setOpenFirst] = useState(true)

  return (
    <div className={className}>
      <ul className={css.accordionList}>
        {list.map((item, key) => (
          <li key={`${key}-li`} className={css.listItem}>
            <AccordionItem
              {...item}
              openFirst={openFirst && key === 0}
              changeOpenBlock={() => setOpenFirst(false)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Accordion
