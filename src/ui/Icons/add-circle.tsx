import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const AddCircle = ({
  width,
  height,
  className,
  onClick,
  fill = '#1e91d6',
}: IconProps<{ onClick?: () => void }>): ReactElement => (
  <Icon viewBox='0 0 24 24' width={width} height={height} className={className} onClick={onClick}>
    <path fill='none' d='M0 0h24v24H0z' />
    <path
      fill={fill}
      d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'
    />
  </Icon>
)

export default AddCircle
