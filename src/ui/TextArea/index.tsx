// eslint-disable-next-line import/default
import classNames from 'classnames'
import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from 'react'
import css from './TextArea.module.scss'

interface Props
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  invalid?: boolean
  value?: string
  onChange?: any
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ className, invalid, ...props }, ref) => {
  const textareaClass = classNames(className, css.textarea, {
    [css.textareaInvalid]: !!invalid,
  })

  return <textarea ref={ref} className={textareaClass} {...props} />
})

export default TextArea
