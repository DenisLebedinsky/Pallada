import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Mail = ({ width, height, className, fill = '#003E66' }: IconProps): ReactElement => (
  <Icon className={className} width={width} height={height} viewBox='0 0 16 16'>
    <g id='Articles' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='08-00-00-Articles-List-OLD' transform='translate(-29.000000, -304.000000)'>
        <g id='library_books-24px' transform='translate(28.000000, 303.000000)'>
          <polygon id='Path' points='0 0 16 0 16 16 0 16'></polygon>
          <path
            d='M2.66666667,4 L1.33333333,4 L1.33333333,13.3333333 C1.33333333,14.0666667 1.93333333,14.6666667 2.66666667,14.6666667 L12,14.6666667 L12,13.3333333 L2.66666667,13.3333333 L2.66666667,4 Z M13.3333333,1.33333333 L5.33333333,1.33333333 C4.6,1.33333333 4,1.93333333 4,2.66666667 L4,10.6666667 C4,11.4 4.6,12 5.33333333,12 L13.3333333,12 C14.0666667,12 14.6666667,11.4 14.6666667,10.6666667 L14.6666667,2.66666667 C14.6666667,1.93333333 14.0666667,1.33333333 13.3333333,1.33333333 Z M12.6666667,7.33333333 L6,7.33333333 L6,6 L12.6666667,6 L12.6666667,7.33333333 Z M10,10 L6,10 L6,8.66666667 L10,8.66666667 L10,10 Z M12.6666667,4.66666667 L6,4.66666667 L6,3.33333333 L12.6666667,3.33333333 L12.6666667,4.66666667 Z'
            id='Shape'
            fill={fill}
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default Mail
