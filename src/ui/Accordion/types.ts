export interface AccordionProp {
  list: AccordionItemType[]
  className?: string
}

export type AccordionItemType = {
  title: string
  content: React.ReactElement
  openFirst?: boolean
  changeOpenBlock?: () => void
}
