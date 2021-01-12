import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const CircleCheck = ({ width, height, className, fill = '#47C910' }: IconProps): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 20 20'>
    <g fill='none' fillRule='evenodd'>
      <path d='M-2-2h24v24H-2z' />
      <path
        d='M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM8 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z'
        fill={fill}
      />
    </g>
  </Icon>
)

export default CircleCheck
