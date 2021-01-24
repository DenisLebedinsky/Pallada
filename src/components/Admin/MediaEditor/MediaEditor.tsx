import Button from '@material-ui/core/Button'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import React, { useState } from 'react'
import ImageCard from 'src/components/Admin/MediaEditor/ImageCard/ImageCard'
import Uploader from 'src/components/Admin/Uploader/Uploader'
import css from './MediaEditor.module.scss'

interface MediaEditorProps {
  images: string[]
  addImage: (value: string) => void
  deleteImages: (values: string[]) => void
}

const MediaEditor: React.FC<MediaEditorProps> = ({ images, addImage, deleteImages }) => {
  const [selectImages, setSelectImages] = useState<string[]>([])

  const changeChecked = (src: string) => {
    if (selectImages.includes(src)) {
      setSelectImages(selectImages.slice().filter((img) => img !== src))
    } else {
      setSelectImages([...selectImages, src])
    }
  }

  const getCheck = (src: string) => selectImages.includes(src)
  const onDelete = () => deleteImages(selectImages)
  const selectAll = () => setSelectImages(images)
  const clearAll = () => setSelectImages([])

  return (
    <div className={css.mediaEditor}>
      <div className={css.media}>
        <Uploader afterLoad={addImage} />

        <div className={css.images}>
          <div className={css.loadControl}>
            <div>
              <Button onClick={onDelete}>
                <DeleteOutlineIcon className={css.btnIcon} />
                <span className={css.btnName}>Удалить выделенные</span>
              </Button>
            </div>
            <div>
              <Button onClick={selectAll}>
                <DoneAllIcon className={css.btnIcon} />
                <span className={css.btnName}>Выделить все</span>
              </Button>
              <Button onClick={clearAll}>
                <CheckBoxOutlineBlankIcon className={css.btnIcon} />
                <span className={css.btnName}>Очистить</span>
              </Button>
            </div>
          </div>

          {!!images?.length && (
            <div className={css.view}>
              {images.map((src, i) => (
                <ImageCard
                  key={src + i}
                  src={src}
                  checked={getCheck(src)}
                  changeChecked={changeChecked}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MediaEditor
