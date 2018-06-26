import * as React from 'react'
import { QueryResult, Query } from 'react-apollo'
import { Button } from 'antd'
import { DialogView, Autocomplete, ListView } from '../../components'
import { VIDEO_QUERY  } from './list-page-gql'
import { VideoSchema } from './list-view-schema'
import { GetAllVideosQuery } from '../../api/gql-query-interfaces'

interface ListPageState {
  isDialogOpen: boolean
}

export class ListPage extends React.Component<any, ListPageState> {

  constructor(props: any) {
    super(props)

    this.state = {
      isDialogOpen: false,
    }

    this.onDialogOpen = this.onDialogOpen.bind(this)
    this.submitDialog = this.submitDialog.bind(this)
    this.cancelDialog = this.cancelDialog.bind(this)
    this.onValueSelection = this.onValueSelection.bind(this)
  }

  onDialogOpen() {
    this.setState({
      isDialogOpen: !this.state.isDialogOpen,
    })
  }

  submitDialog() {
    this.setState({
      isDialogOpen: !this.state.isDialogOpen,
    })
  }

  cancelDialog() {
    this.setState({
      isDialogOpen: false,
    })
  }

  onValueSelection(item: any) {
    console.log(`Selected item from autocomplete is ${item}`)
  }

  render() {
    return (
        <Query query={VIDEO_QUERY}>
          {({data}: QueryResult<GetAllVideosQuery>) => {
            const videos = data && data.videos
            if (data && videos) {
              return (
                <div>
                  <main className="team-vs-team">
                    <Button onClick={this.onDialogOpen}>Open Dialog</Button>
                    <ListView  data={videos} schema={VideoSchema} />
                    <DialogView
                      visible={this.state.isDialogOpen}
                      handleOk={this.submitDialog}
                      handleCancel={this.cancelDialog}
                    >
                      <p> I am in the dialog</p>
                      <Autocomplete
                        data={videos}
                        onSelect={this.onValueSelection}
                      />
                    </DialogView>
                  </main>
                </div>
              )
            }
            return <div>No Data</div>
          }}
        </Query>
    )
  }
}
