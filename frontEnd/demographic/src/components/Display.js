import React, {Component} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'


class Display extends Component {
  render() {
    const columns = [
      {
      Header: this.props.selectedItem,
      accessor: 'name' 
    }, {
      Header: 'Average Age',
      accessor: 'averageAge',
    }, {
      Header: 'Count',
      accessor: 'count'
    }]

   return (
    <ReactTable
      data={this.props.demographicData}
      columns={columns}
    />
    )
  }
}

export default Display;
    