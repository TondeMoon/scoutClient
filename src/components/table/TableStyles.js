import { Button, Box, ListItem, ListItemText, styled } from '@mui/material'

export const TransparentButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'upperCase',
  fontSize: 14,
  border: '1px solid',
  borderColor: 'rgba(61, 61, 61, 0.3)',
  color: '#3D3D3D',
  width: 130,
  height: 48,
  paddingLeft: 0,
  paddingRight: 0,
  marginRight: 30,
  borderRadius: 0,
})

export const BoxMenu = styled(Box)({
  boxShadow: 'none',
  height: '100%',
  color: '#3D3D3D',
  width: 275,
  backgroundColor: '#F6F6F4',
})

export const ListItemStyled = styled(ListItemText)({
  paddingLeft: 43,
  fontSize: 12,
})

export const ListItemStyledBold = styled(ListItemText)({
  paddingLeft: 43,
  fontSize: 12,
  fontWeight: 600,
})

export const ListItemHead = styled(ListItem)({
  paddingLeft: 58,
  paddingRight: 19,
  paddingTop: 34,
  paddingBottom: 75,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: 12,
})

export const text = {
  fontSize: 12,
}
