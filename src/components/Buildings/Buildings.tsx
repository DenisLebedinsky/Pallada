import { LinearProgress } from '@material-ui/core'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Building } from 'src/components/Buildings/types'
import EmptyBuildings from 'src/components/EmptyBuildings'
import MediaCard from 'src/components/MediaCard/MediaCard'
import css from './Buildings.module.scss'

interface BuildingsProps {
  buildings: Building[]
  hasMore: boolean
  loadMore: () => void
  loading: boolean
  adminMode?: boolean
}

const Buildings = ({ buildings, hasMore, loadMore, loading, adminMode }: BuildingsProps) => {
  if (loading && !buildings.length) {
    return (
      <div className={css.buildings}>
        <LinearProgress color='secondary' />
      </div>
    )
  }

  if (!loading && !buildings.length) {
    return <EmptyBuildings />
  }

  return (
    <div className={css.buildings}>
      {!!buildings.length && (
        <InfiniteScroll className={css.grid} pageStart={0} loadMore={loadMore} hasMore={hasMore}>
          {buildings.map((building: Building, index) => (
            <MediaCard key={index} building={building} adminMode={adminMode} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  )
}

export default Buildings
