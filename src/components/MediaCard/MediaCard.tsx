import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import React from 'react'
import { priceSeparate } from 'src/utils/converter'
import css from './MediaCard.module.scss'

export default function MediaCard({ building }) {
  return (
    <Link href={`/buildings/[id]`} as={`/buildings/${building.id}`}>
      <Card className={css.card}>
        <CardActionArea className={css.mediaArea}>
          <img
            src='http://ovz3.palladahome.no45p.vps.myjino.ru:49414/images(11).jpeg'
            alt=''
            className={css.media}
          />
        </CardActionArea>
        <CardActions>
          <Typography className={css.label}>{building.name}</Typography>
        </CardActions>

        <div className={css.price}>{priceSeparate(building.price)} руб.</div>
      </Card>
    </Link>
  )
}
