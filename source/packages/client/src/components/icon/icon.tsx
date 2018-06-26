import * as React from 'react'
import { Icon as AntIcon } from 'antd'
import './icon.css'

export type IconType = 'add' | 'backup' | 'edit' | 'event'  | 'filter' | 'menu' | 'settings'

export interface IconProps {
  type: IconType
  style?: any
  iconClicked?: () => void
}

export const Icon = (props: IconProps) => (
  <AntIcon
    type={props.type}
    spin={true}
    style={props.style}
    onClick={props.iconClicked}
  />
)
