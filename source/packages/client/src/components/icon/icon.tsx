import * as React from 'react'
import './icon.css'

export type IconType = 'add' | 'backup' | 'edit' | 'event'  | 'filter_list' | 'menu' | 'settings'

export interface IconProps {
  type: IconType
  className?: string
  iconClicked?: () => void
}

export const Icon = (props: IconProps) => (
  <i className={`material-icons ${props.className}`} onClick={props.iconClicked}>{props.type}</i>
)
