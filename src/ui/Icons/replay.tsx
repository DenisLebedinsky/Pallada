import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Replay = ({ width, height, className }: IconProps): ReactElement => (
  <Icon width={width} height={height} viewBox='0 0 16 20' className={className}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' opacity='0.395577567'>
      <g transform='translate(-312.000000, -385.000000)'>
        <g transform='translate(308.000000, 384.000000)'>
          <g>
            <rect x='0' y='0' width='24' height='24'></rect>
            <rect x='0' y='0' width='24' height='24'></rect>
            <rect x='0' y='0' width='24' height='24'></rect>
          </g>
          <path
            d='M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 Z'
            fill='#003E66'
            fillRule='nonzero'
          ></path>
        </g>
      </g>
    </g>
  </Icon>
)

export default Replay
