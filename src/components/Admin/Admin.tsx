import { BottomNavigationAction } from '@material-ui/core'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import Box from '@material-ui/core/Box'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import DomainIcon from '@material-ui/icons/Domain'
import HomeIcon from '@material-ui/icons/Home'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MapIcon from '@material-ui/icons/Map'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Districts from 'src/components/Admin/Districts'
import Floors from 'src/components/Admin/Floors'
import Locations from 'src/components/Admin/Locations'
import NewBuildings from 'src/components/Admin/NewBuildings'
import RealObjects from 'src/components/Admin/RealObjects'
import css from './Admin.module.scss'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

export default function AdminTabs() {
  const [value, setValue] = useState(0)
  const { push } = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('ids')
    if (!token) {
      push('/admin/login')
    }
  }, [])

  return (
    <div className={css.admin}>
      <h1>Панель администратора</h1>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        className={css.mobileNav}
      >
        <BottomNavigationAction label='Новые Объявления' icon={<AddCircleIcon />} />
        <BottomNavigationAction label='Населенные пункты' icon={<LocationOnIcon />} />
        <BottomNavigationAction label='Районы' icon={<MapIcon />} />
        <BottomNavigationAction label='Этажность' icon={<DomainIcon />} />
        <BottomNavigationAction label='Объекты недвижимости' icon={<HomeIcon />} />
      </BottomNavigation>

      <TabPanel value={value} index={0} className={css.tab}>
        <NewBuildings />
      </TabPanel>
      <TabPanel value={value} index={1} className={css.tab}>
        <Locations />
      </TabPanel>
      <TabPanel value={value} index={2} className={css.tab}>
        <Districts />
      </TabPanel>
      <TabPanel value={value} index={3} className={css.tab}>
        <Floors />
      </TabPanel>
      <TabPanel value={value} index={4} className={css.tab}>
        <RealObjects />
      </TabPanel>
    </div>
  )
}
