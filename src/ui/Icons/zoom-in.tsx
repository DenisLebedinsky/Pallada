import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const ZoomIn = ({
  width,
  height,
  className,
  opacity,
  onClick,
  id,
}: IconProps<{ opacity?: string; onClick?: () => void }>): ReactElement => (
  <Icon
    viewBox='0 0 18 18'
    width={width}
    height={height}
    className={className}
    onClick={onClick}
    id={id}
  >
    <g fill='none' fillRule='evenodd' opacity={opacity}>
      <path
        fill='#003E66'
        fillRule='nonzero'
        d='M12.5 11h-.79l-.28-.27A6.471 6.471 0 0013 6.5 6.5 6.5 0 106.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z'
      />
      <path d='M-3-3h24v24H-3z' />
      <path fill='#003E66' fillRule='nonzero' d='M9 7H7v2H6V7H4V6h2V4h1v2h2z' />
    </g>
  </Icon>
)

export default ZoomIn
