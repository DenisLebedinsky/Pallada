import { Loader } from 'src/ui/Icons'
import css from './Loading.module.scss'

const Loading = ({ text = 'Загрузка ...' }) => {
  return (
    <div className={css.wrapper}>
      <Loader width={40} height={40} />
      <span className={css.text}>{text}</span>
    </div>
  )
}

export default Loading
