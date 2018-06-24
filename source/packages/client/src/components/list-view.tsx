import * as React from 'react'
import { Table } from 'antd'
import { Schema } from '../models/core'
// tslint:disable-next-line:no-submodule-imports
import { ColumnProps } from 'antd/lib/table/interface'

export interface ListViewProps {
  data: any[]
  schema: any[]
}

interface ColumnPropsType {
  title: string
  dataIndex: string
  className?: string
  render?: React.ReactNode
}

function getColumns(schema: Schema[]): Array<ColumnProps<ColumnPropsType>> {
  const cols: Array<ColumnProps<ColumnPropsType>> = []
  schema.map((sch: Schema) => {
    cols.push({
      title: sch.name,
      dataIndex: sch.propName,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a[sch.propName].length - b[sch.propName].length,
    })
  })
  return cols
}

function getRowKey(item: any): string {
  return item.id
}

export const ListView = (props: ListViewProps) => (
  <Table
    rowKey={getRowKey}
    columns={getColumns(props.schema)}
    dataSource={props.data}
    bordered={true}
    title={() => 'Header'}
    footer={() => 'Footer'}
  />
)