import * as React from 'react'
import { Container, Drawer, List, ListItem, ListItemText } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import DehazeIcon from '@mui/icons-material/Dehaze'

import homesDummy from '../../dummy-data/homesDummy'
import { TransparentButton, BoxMenu, ListItemStyled, ListItemHead, ListItemStyledBold, text } from './TableStyles'
import './Table.css'

const columns = [
  {
    field: 'id',
    headerName: 'N',
    width: 15,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 200,
  },
  {
    field: 'source',
    headerName: 'Source',
  },
  {
    field: 'agent',
    headerName: 'Agent',
    width: 120,
  },
  {
    field: 'agentName',
    headerName: 'Contact Person',
  },
  {
    field: 'agentAddress',
    headerName: 'Contact Address',
    width: 130,
  },
  {
    field: 'businessPhone',
    headerName: 'Business phone',
    width: 160,
  },
  {
    field: 'mobilePhone',
    headerName: 'Mobile phone',
    width: 160,
  },
  {
    field: 'link',
    headerName: 'direct link',
  },
  {
    field: 'availability',
    headerName: 'Availability',
  },
  {
    field: 'street',
    headerName: 'Street',
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 80,
  },
  {
    field: 'region',
    headerName: 'Region',
    width: 120,
  },
  {
    field: 'geoCoords',
    headerName: 'Geo Coordinates',
    valueFormatter: (params) => params.value.replace(',', '  '),
    width: 100,
  },
  {
    field: 'reference',
    headerName: 'Reference',
  },
  {
    field: 'features',
    headerName: 'Features',
  },
  {
    field: 'square',
    headerName: 'Total square',
  },
  {
    field: 'living',
    headerName: 'Living square',
  },
  {
    field: 'rooms',
    headerName: 'Rooms qty',
  },
  {
    field: 'floor',
    headerName: 'Floor',
  },
  {
    field: 'area',
    headerName: 'Plot sq',
    disablePadding: true,
  },
  {
    field: 'yearConstr',
    headerName: 'Year Built',
  },
  {
    field: 'yearRenovated',
    headerName: 'Year Renovated',
  },
  {
    field: 'floorsTotal',
    headerName: 'Floors Total',
  },
  {
    field: 'desc',
    valueFormatter: (params) => params.value?.slice(0, 100),
    headerName: 'Description',
    width: 300,
  },
  {
    field: 'price',
    valueFormatter: (params) => {
      const valueFormatted = params.value ? Number(params.value).toLocaleString() : ''
      return `${valueFormatted}`
    },
    headerName: 'Price',
  },
  {
    field: 'currency',
    headerName: 'Currency',
  },
  {
    field: 'createdAt',
    type: 'dateTime',
    valueFormatter: (params) => new Date(params.value).toDateString(),
    headerName: 'createdAt',
  },
  {
    field: 'updatedAt',
    type: 'dateTime',
    valueFormatter: (params) => new Date(params.value).toDateString(),
    headerName: 'updatedAt',
  },
  {
    field: 'urlSite',
    headerName: 'website link',
    width: 300,
  },
]

const rows = homesDummy.map((item, index) => ({
  id: index,
  type: item.type,
  title: item.title,
  source: item.source,
  agent: item.agent.companyName,
  agentName: item.agent.fullName,
  agentAddress: `${item.agent.street}, ${item.agent.city}`,
  businessPhone: item.agent.businessPhone,
  mobilePhone: item.agent.mobilePhone,
  link: '',
  availability: item.availableFrom,
  street: item.adress,
  country: 'CH',
  region: item.country,
  geoCoords: item.coords,
  features: '',
  reference: '',
  square: item.square,
  living: item.livingSq,
  rooms: item.rooms,
  floor: item.floor,
  area: item.area,
  yearConstr: item.yearBuilt,
  yearRenovated: item.yearRenovated,
  floorsTotal: '',
  desc: item.desc,
  price: item.price,
  currency: item.currency,
  createdAt: item.created,
  updatedAt: item.modified,
  urlSite: item.link,
}))

export default function StickyHeadTable() {
  const [burgerState, setBurgerState] = React.useState(false)

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setBurgerState(!burgerState)
  }

  const list = (
    <BoxMenu role="presentation">
      <ListItemHead>
        <ListItemText primary="OWNERO MLS" primaryTypographyProps={{ style: text }} />
        <DehazeIcon sx={{ color: '#3D3D3D', cursor: 'pointer' }} onClick={toggleDrawer} onKeyDown={toggleDrawer} />
      </ListItemHead>
      <List onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <ListItem button>
          <ListItemStyled primary="User / Log out" primaryTypographyProps={{ style: text }} />
        </ListItem>
        <ListItem button>
          <ListItemStyledBold primary="Database" primaryTypographyProps={{ style: text }} />
        </ListItem>
        <ListItem button>
          <ListItemStyled primary="Objects for review" primaryTypographyProps={{ style: text }} />
        </ListItem>
        <ListItem button>
          <ListItemStyled primary="Algorithm" primaryTypographyProps={{ style: text }} />
        </ListItem>
        <ListItem button>
          <ListItemStyled primary="Settings" primaryTypographyProps={{ style: text }} />
        </ListItem>
        <ListItem button>
          <ListItemStyled primary="Journal" primaryTypographyProps={{ style: text }} />
        </ListItem>
      </List>
    </BoxMenu>
  )

  return (
    <Container maxWidth="xl">
      <button className="burger-button" onClick={toggleDrawer}>
        <DehazeIcon sx={{ color: '#3D3D3D' }} />
      </button>
      <Drawer anchor="left" onBackdropClick={toggleDrawer} open={burgerState} transitionDuration={1500}>
        {list}
      </Drawer>
      <div className="button-container">
        <TransparentButton variant="outlined" size="large">
          update data
        </TransparentButton>
        <TransparentButton variant="outlined" size="large">
          Filters
        </TransparentButton>
        <TransparentButton variant="outlined" size="large">
          export
        </TransparentButton>
      </div>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={rows}
          sx={{ fontSize: 12, whiteSpace: 'normal' }}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[3]}
        />
      </div>
    </Container>
  )
}
