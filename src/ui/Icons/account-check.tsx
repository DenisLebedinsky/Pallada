import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const AccountCheck = ({ width, height, className }: IconProps): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 19 17'>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-31.000000, -156.000000)'>
        <g transform='translate(28.000000, 152.000000)'>
          <path d='M0 0 24 0 24 24 0 24z' />
          <g transform='translate(3.000000, 4.000000)' fillRule='nonzero'>
            <path
              d='M6,13 L9,10.06 C8.61,10.02 8.32,10 8,10 C5.33,10 0,11.34 0,14 L0,16 L9,16 L6,13 Z M8,8 C10.21,8 12,6.21 12,4 C12,1.79 10.21,0 8,0 C5.79,0 4,1.79 4,4 C4,6.21 5.79,8 8,8'
              fill='#003E66'
            />
            <path d='M12.47 16.5 9 13 10.4 11.59 12.47 13.67 17.6 8.5 19 9.91z' fill='#47C910' />
          </g>
        </g>
      </g>
    </g>
  </Icon>
)

export default AccountCheck
