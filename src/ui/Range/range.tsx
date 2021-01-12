import { ReactElement, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import css from './range.module.scss'

interface RangeProps
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  min: number
  max: number
  value: number
  step: number
}

const Range = ({ className, ...props }: RangeProps): ReactElement => {
  return (
    <input
      type='range'
      className={className ? `${css.range} ${className}` : css.range}
      {...props}
    />
  )
}

export default Range
