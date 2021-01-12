import cls from 'classnames'
import { ToolTipDirection, TooltipProps } from 'src/ui/Tooltip/types'
import css from './Tooltip.module.scss'

const Tooltip = ({ children, text, direction, ...props }: TooltipProps) => {
  const classesBlock = cls(css.tooltip, {
    [css.tooltipRight]: direction === ToolTipDirection.right,
    [css.tooltipLeft]: direction === ToolTipDirection.left,
  })

  return (
    <div className={classesBlock} {...props}>
      <span className={css.tooltiptext}>{text}</span>
      {children}
    </div>
  )
}

export default Tooltip
