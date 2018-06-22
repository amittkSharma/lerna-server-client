import * as React from 'react'
import { Button } from 'antd'

export interface ListViewProps {
  data: any[]
}

export const ListView = (_props: ListViewProps) => (
  <Button type="primary">Button</Button>
)