import { CircularProgress } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'
import React, { useState } from 'react'
import api from 'src/utils/api'
import css from './Uploader.module.scss'

interface UploaderProps {
  image?: string
  afterLoad: (src: string) => void
}

const Uploader: React.FC<UploaderProps> = ({ afterLoad }) => {
  const [uploading, setUploading] = useState(false)

  const onDragOver = (e) => {
    e.preventDefault()
  }

  const onDrop = (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        const formData = new FormData()
        formData.append('file', files[0])
        loadImage(formData)
      }
    }
  }

  const onChange = (e) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        const formData = new FormData()
        formData.append('file', files[0])
        loadImage(formData)
      }
    }
  }

  const loadImage = async (formData) => {
    setUploading(true)
    try {
      const res = await api.post('/files/save', formData)

      if (res.data) {
        console.log('res', res.data)
        afterLoad(res.data)
      }
    } catch (e) {
      console.log('Error: file not loaded')
    }
    setUploading(false)
  }

  if (uploading)
    return (
      <div className={css.uploader}>
        <form className={css.form}>
          <CircularProgress />
        </form>
      </div>
    )

  return (
    <label htmlFor='image-loader' className={css.uploader}>
      <form onDragOver={onDragOver} onDrop={onDrop} className={css.form}>
        <ImageIcon className={css.icon} />
        <span className={css.formButton} type='button'>
          Выбрать файл
        </span>

        <input
          id='image-loader'
          type='file'
          className={css.input}
          accept='image/gif,image/jpeg,application/pdf,image/png, image/x-png,image/jpeg'
          onChange={onChange}
        />
      </form>
    </label>
  )
}

export default Uploader
