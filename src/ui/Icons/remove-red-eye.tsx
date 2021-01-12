import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const RemoveRedEye = ({
  width,
  height,
  className,
  opacity,
}: IconProps<{ opacity?: string }>): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 22 16'>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' opacity={opacity}>
      <g transform='translate(-309.000000, -220.000000)'>
        <g transform='translate(308.000000, 216.000000)'>
          <path d='M0 0 24 0 24 24 0 24z' />
          <path
            d='M12,6.5 C15.79,6.5 19.17,8.63 20.82,12 C19.17,15.37 15.8,17.5 12,17.5 C8.2,17.5 4.83,15.37 3.18,12 C4.83,8.63 8.21,6.5 12,6.5 M12,4.5 C7,4.5 2.73,7.61 1,12 C2.73,16.39 7,19.5 12,19.5 C17,19.5 21.27,16.39 23,12 C21.27,7.61 17,4.5 12,4.5 Z M12,9.5 C13.38,9.5 14.5,10.62 14.5,12 C14.5,13.38 13.38,14.5 12,14.5 C10.62,14.5 9.5,13.38 9.5,12 C9.5,10.62 10.62,9.5 12,9.5 M12,7.5 C9.52,7.5 7.5,9.52 7.5,12 C7.5,14.48 9.52,16.5 12,16.5 C14.48,16.5 16.5,14.48 16.5,12 C16.5,9.52 14.48,7.5 12,7.5 Z'
            fill='#003E66'
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default RemoveRedEye
