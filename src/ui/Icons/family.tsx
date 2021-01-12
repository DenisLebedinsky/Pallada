import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Family = ({
  width,
  height,
  className,
  fill = '#003E66',
}: IconProps<{ fill?: string }>): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 16 10'>
    <g fill='none' fillRule='evenodd' opacity='.721'>
      <path d='M0-3h16v16H0z' />
      <path
        d='M10.667 4.333a1.992 1.992 0 001.993-2 1.997 1.997 0 10-3.993 0c0 1.107.893 2 2 2zm-5.334 0a1.992 1.992 0 001.994-2 1.997 1.997 0 10-3.993 0c0 1.107.893 2 2 2zm0 1.334C3.78 5.667.667 6.447.667 8v1.667H10V8c0-1.553-3.113-2.333-4.667-2.333zm5.334 0c-.194 0-.414.013-.647.033.773.56 1.313 1.313 1.313 2.3v1.667h4V8c0-1.553-3.113-2.333-4.666-2.333z'
        fill={fill}
        fillRule='nonzero'
      />
    </g>
  </Icon>
)

export default Family
