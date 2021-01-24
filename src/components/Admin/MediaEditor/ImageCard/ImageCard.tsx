import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import React from 'react'
import { makeImagePath } from 'src/utils/converter'
import css from './ImageCard.module.scss'

interface ImageCardProps {
  src: string
  checked: boolean
  changeChecked: (value: string) => void
}

const ImageCard: React.FC<ImageCardProps> = ({ src, checked, changeChecked }) => {
  return (
    <div className={css.imageCard} onClick={() => changeChecked(src)}>
      <img src={makeImagePath(src)} alt={src} className={css.image} />
      {checked ? (
        <RadioButtonCheckedIcon className={css.checkIcon} />
      ) : (
        <RadioButtonUncheckedIcon className={css.checkIcon} />
      )}
    </div>
  )
}

export default ImageCard
