import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const RemoveCircle = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 14 14' className={className}>
    <g fill='none' fillRule='evenodd' opacity='.79964193'>
      <path d='M-1-1h16v16H-1z' />
      <path
        d='M7 .33333333C3.32.33333333.33333333 3.32.33333333 7 .33333333 10.68 3.32 13.6666667 7 13.6666667c3.68 0 6.6666667-2.9866667 6.6666667-6.6666667C13.6666667 3.32 10.68.33333333 7 .33333333zm3.3333333 7.33333334H3.66666667V6.33333333h6.66666663v1.33333334z'
        fill='#0072BB'
        fillRule='nonzero'
      />
    </g>
  </Icon>
)

export default RemoveCircle
