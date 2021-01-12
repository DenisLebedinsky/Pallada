export interface TagInputProps {
  label: string
  value: Option[]
  onChange: (args) => void
  isSearchable?: boolean
  options?: Option[]
  id?: string
  optionMsg?: () => string
  creatable?: boolean
}

export type Option = {
  label: string
  value: string
}
