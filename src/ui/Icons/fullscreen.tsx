import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Fullscreen = ({
  width,
  height,
  className,
  opacity,
  onClick,
}: IconProps<{ opacity?: string; onClick?: () => void }>): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 14 14' className={className} onClick={onClick}>
    <g fill='none' fillRule='evenodd' opacity={opacity}>
      <path d='M-5-5h24v24H-5z' />
      <path
        d='M2 9H0v5h5v-2H2V9zM0 5h2V2h3V0H0v5zm12 7H9v2h5V9h-2v3zM9 0v2h3v3h2V0H9z'
        fill='#003E66'
        fillRule='nonzero'
      />
    </g>
  </Icon>
)

export default Fullscreen
