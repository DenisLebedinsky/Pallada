import { LinearProgress } from '@material-ui/core'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Buildins } from 'src/components/Buildings/types'
import MediaCard from 'src/components/MediaCard/MediaCard'
import css from './Buildings.module.scss'

interface BuildingsProps {
  buildings: Buildins[]
  hasMore: boolean
  loadMore: () => void
  loading: boolean
}

const Buildings = ({ buildings, hasMore, loadMore, loading }: BuildingsProps) => {
  if (loading && !buildings.length) {
    return (
      <div className={css.buildings}>
        <LinearProgress color='secondary' />
      </div>
    )
  }

  return (
    <div className={css.buildings}>
      {!!buildings.length && (
        <InfiniteScroll className={css.grid} pageStart={0} loadMore={loadMore} hasMore={hasMore}>
          {buildings.map((building: Buildins, index) => (
            <MediaCard key={index} building={building} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  )
}

export default Buildings
