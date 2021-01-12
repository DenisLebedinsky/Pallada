import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const CloseCircle = ({ width, height, className, fill = '#F96004' }: IconProps): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 20 20'>
    <g transform='translate(-2 -2)' fill='none' fillRule='evenodd'>
      <path d='M0 0h24v24H0z' />
      <circle fill='#FFF' cx='12' cy='12' r='10' />
      <path
        d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.8284271 14.2426407L12 13.4142136l-2.82842712 2.8284271-1.41421357-1.4142136L10.5857864 12 7.75735931 9.17157288l1.41421357-1.41421357L12 10.5857864l2.8284271-2.82842709 1.4142136 1.41421357L13.4142136 12l2.8284271 2.8284271-1.4142136 1.4142136z'
        fill={fill}
      />
    </g>
  </Icon>
)

export default CloseCircle
