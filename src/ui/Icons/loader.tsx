import { ReactElement } from 'react'
import Icon, { IconProps } from './icon'

const Loader = ({ width, height, className }: IconProps): ReactElement => (
  <Icon
    width={width}
    height={height}
    viewBox='0 0 100 100'
    preserveAspectRatio='xMidYMid'
    className={className}
  >
    <circle cx='50' cy='50' r='40' stroke='#d9dfe4' strokeWidth='4' fill='none' />
    <circle
      cx='50'
      cy='50'
      r='40'
      stroke='#003e66'
      strokeWidth='4'
      strokeLinecap='round'
      fill='none'
      transform='rotate(6.03 50 50)'
    >
      <animateTransform
        attributeName='transform'
        type='rotate'
        repeatCount='indefinite'
        dur='2s'
        values='0 50 50;180 50 50;720 50 50'
        keyTimes='0;0.5;1'
      />
      <animate
        attributeName='stroke-dasharray'
        repeatCount='indefinite'
        dur='2s'
        values='0 251.32741228718345;201.06192982974676 50.26548245743669;0 251.32741228718345'
        keyTimes='0;0.5;1'
      />
    </circle>
  </Icon>
)

export default Loader
