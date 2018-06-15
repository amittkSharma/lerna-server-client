import * as React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

export interface ListViewProps {
  data: any[]
}

export const ListView = (props: ListViewProps) => (
  <List>
    {
      props.data.map((x: any) => (
        <ListItem key={x.id}>
          <ListItemText primary={x.name}  secondary={x.watched} />
        </ListItem>
      ))
    }
  </List>
)