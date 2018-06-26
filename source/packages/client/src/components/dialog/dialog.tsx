import * as React from 'react'
import { Modal, Button } from 'antd'

interface DialogViewProps {
  header?: string
  visible: boolean
  handleOk?: () => void
  handleCancel?: () => void
  children: React.ReactNode
}

export class DialogView extends React.Component<DialogViewProps, never> {

  constructor(props: DialogViewProps) {
    super(props)
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        title="Title"
        onOk={this.props.handleOk}
        onCancel={this.props.handleCancel}
        footer={[
          <Button key="back" onClick={this.props.handleCancel}>Return</Button>,
          <Button key="submit" type="primary" onClick={this.props.handleOk}>
            Submit
          </Button>,
        ]}
      >
        {this.props.children}
      </Modal>
    )
  }
}
