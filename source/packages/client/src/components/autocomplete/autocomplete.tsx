import * as React from 'react'
import { AutoComplete } from 'antd'
const Option = AutoComplete.Option

interface AutocompleteProps {
  data: any[],
  onSelect: (item: any) => void
}

interface AutocompleteState {
  data: any[]
  filteredData: any[]
}

export class Autocomplete extends React.Component<AutocompleteProps, AutocompleteState> {

  state: AutocompleteState = {
    data: [],
    filteredData: [],
  }

  constructor(props: AutocompleteProps) {
    super(props)

    this.state = {
      data: this.props.data,
      filteredData: [],
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(value: any) {
    this.setState({
      filteredData: !value ? [] : this.state.data.filter((x: any) =>
       x.name.indexOf(value) > -1),
    })
  }

  render() {
    return (
      <AutoComplete
        onSelect={this.props.onSelect}
        onSearch={this.handleSearch}
        placeholder="input here"
      >
      {
        this.state.filteredData.map((d: any) =>
          <Option key={d.id}>{d.name}</Option>)
      }
      </AutoComplete>
    )
  }
}