import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Edit = ({
  width,
  height,
  className,
  fill = '#FFFFFF',
  onClick,
}: IconProps<{ onClick?: () => void }>): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 30 30' className={className} onClick={onClick}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-567.000000, -247.000000)'>
        <g transform='translate(562.000000, 242.000000)'>
          <path d='M0 0 40 0 40 40 0 40z'></path>
          <path
            d='M23.4333333,15.0333333 L24.9666667,16.5666667 L9.86666667,31.6666667 L8.33333333,31.6666667 L8.33333333,30.1333333 L23.4333333,15.0333333 M29.4333333,5 C29.0166667,5 28.5833333,5.16666667 28.2666667,5.48333333 L25.2166667,8.53333333 L31.4666667,14.7833333 L34.5166667,11.7333333 C35.1666667,11.0833333 35.1666667,10.0333333 34.5166667,9.38333333 L30.6166667,5.48333333 C30.2833333,5.15 29.8666667,5 29.4333333,5 Z M23.4333333,10.3166667 L5,28.75 L5,35 L11.25,35 L29.6833333,16.5666667 L23.4333333,10.3166667 Z'
            fill={fill}
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default Edit
