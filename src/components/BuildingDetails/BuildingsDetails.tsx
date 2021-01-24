import { Button } from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import { Building } from 'src/components/Buildings/types'
import ContactModal from 'src/components/Modals/ContactModal'
import PropertyLabel from 'src/ui/PropertyLabel/PropertyLabel'
import api from 'src/utils/api'
import { priceSeparate } from 'src/utils/converter'
import css from './BuildingsDetails.module.scss'

const BuildingsDetails = () => {
  const [data, setData] = useState<Building | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false)
  const { query, back, push } = useRouter()
  const id = query.id
  const [contactModal, setContactModal] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ]

  const loadData = async () => {
    try {
      const res = await api.get(`/house/${id}`)

      if (res.data) {
        setData(res.data.house)
      }
    } catch (e) {
      setError(true)
    }
  }

  useEffect(() => {
    if (!data) {
      loadData()
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('ids')) {
      setIsAdmin(true)
    }
  }, [])

  return (
    <div className={css.buildingsDetails}>
      <div className={css.header}>
        <Button className={css.back} onClick={back}>
          <KeyboardBackspaceIcon /> Назад
        </Button>
        <h1 className={css.title}>{data?.name || ''}</h1>
      </div>

      <div className={css.firstRow}>
        <div className={css.viewer}>
          <ImageGallery
            id='image-viewer'
            items={images}
            originalClass={'image-viewer'}
            showPlayButton={false}
          />

          <div className={css.secondRow}>
            <span className={css.desc}>{data?.description}</span>
          </div>
        </div>

        <div className={css.info}>
          <PropertyLabel name='Вид услуг' text={data?.sale ? 'Продажа' : 'Аренда'} />
          <PropertyLabel name='Цена' text={priceSeparate(data?.price)} />
          <PropertyLabel
            name='Населенный пункт'
            text={(typeof data?.locationId == 'object' && data.locationId.name) || ''}
          />
          <PropertyLabel
            name='Район'
            text={(typeof data?.districtId == 'object' && data.districtId.name) || ''}
          />
          <PropertyLabel
            name='Объект недвижимости'
            text={(typeof data?.realtObjectId == 'object' && data.realtObjectId.name) || ''}
          />
          <PropertyLabel name='Площадь' text={`${data?.area} кв/м` || ''} />
          <PropertyLabel name='Этажность' text={`${data?.categoryId?.name}` || ''} />

          <div className={css.contact}>
            <Button
              variant='contained'
              className={css.button}
              onClick={() => setContactModal(true)}
            >
              Связаться с нами
            </Button>

            {isAdmin && (
              <Button
                variant='contained'
                color='secondary'
                className={css.edit}
                onClick={() => push('/admin/edit/[id]', `/admin/edit/${id}`)}
              >
                Редактировать
              </Button>
            )}
          </div>
        </div>
      </div>

      <ContactModal open={contactModal} handleClose={() => setContactModal(false)} />
    </div>
  )
}

export default BuildingsDetails
