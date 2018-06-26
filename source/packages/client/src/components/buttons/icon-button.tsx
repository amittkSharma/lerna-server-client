import * as React from 'react'
import { Button } from 'antd'
import { IconType } from '../icon/icon'

export type IconButtonType = 'primary' | 'ghost' | 'dashed' | 'danger'

export type IconButtonShape = 'circle' | 'circle-outline'

export interface IconButtonProps {
  className?: string
  label?: string
  icon: IconType
  type?: IconButtonType
  shape?: IconButtonShape
  onClick?: () => void
}

export const IconButton = ({icon, label, className, type, shape, onClick}: IconButtonProps) => (
  <Button
    className={className}
    type={type}
    icon={icon}
    shape={shape}
    onClick={onClick}
  >
    {shape ? label : undefined}
  </Button>
)
