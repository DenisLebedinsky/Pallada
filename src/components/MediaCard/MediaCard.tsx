import { Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import React, { useState } from 'react'
import { Building } from 'src/components/Buildings/types'
import api from 'src/utils/api'
import { priceSeparate } from 'src/utils/converter'
import css from './MediaCard.module.scss'

interface MediaCardProps {
  building: Building
  adminMode?: boolean
}

export default function MediaCard({ building, adminMode }: MediaCardProps) {
  const [activated, setActivated] = useState(false)

  const activate = async () => {
    try {
      const res = await api.patch('/houseCheck/changestatus', {
        id: building.id,
      })

      if (res) {
        setActivated(true)
      }
    } catch (e) {
      console.log('not activated')
    }
  }

  if (activated) {
    return null
  }

  return (
    <Card className={css.card}>
      <Link href={`/buildings/[id]`} as={`/buildings/${building.id}`}>
        <CardActionArea className={css.mediaArea}>
          <img
            src='http://ovz3.palladahome.no45p.vps.myjino.ru:49414/images(11).jpeg'
            alt=''
            className={css.media}
          />
        </CardActionArea>
      </Link>
      <CardActions>
        <Typography className={css.label}>{building.name}</Typography>
      </CardActions>

      <CardActions>
        {adminMode && (
          <Box justifyContent='center' display='flex' width={'100%'}>
            <Button variant='contained' color='secondary' onClick={activate}>
              Активировать
            </Button>
          </Box>
        )}
      </CardActions>

      <div className={css.price}>{priceSeparate(building.price)} руб.</div>
    </Card>
  )
}
