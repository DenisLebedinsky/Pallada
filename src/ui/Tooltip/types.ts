import { ReactElement } from 'react'

export interface TooltipProps {
  text: string
  direction?: ToolTipDirection
  children?: ReactElement
}

export enum ToolTipDirection {
  right = 'right',
  left = 'left',
  bottom = 'bottom',
}
