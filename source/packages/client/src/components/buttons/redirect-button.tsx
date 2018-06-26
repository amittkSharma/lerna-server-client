import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import { IconType } from '../icon/icon'
import { IconButton, IconButtonShape, IconButtonType } from './icon-button'

export type RedirectButtonViewType = 'add' | 'calendar' | 'edit' | 'details' | 'list'

export interface RedirectButtonProps {
  className?: string
  domain: string
  typeName: string
  viewType: RedirectButtonViewType
  label?: string
  icon: IconType
  type?: IconButtonType
  shape?: IconButtonShape
}

export const RedirectButton = (props: RedirectButtonProps) => {
  const {viewType, domain, typeName} = props
  const url = `/${viewType}/${domain}/${typeName}`
  return (
    <Route>
      {({history}: RouteComponentProps<any>) => (
        <IconButton
          className={props.className || ''}
          label={props.label}
          icon={props.icon}
          type={props.type}
          shape={props.shape}
          onClick={() => history.push(url)}
        />
      )}
    </Route>
  )
}
