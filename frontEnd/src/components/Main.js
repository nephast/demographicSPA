import React, {Component} from 'react';
import Display from './Display';
import * as apiCalls from '../api/api';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      columns: [],
      demographicData: [],
      selectedItem: null
    }
this.defaultOption = this.state.columns[0]
  }
  
  componentWillMount(){
    this.loadColumns();
  }
  
  async loadColumns(){
    let columns = await apiCalls.getColumns();
    this.setState({ columns });
  }

  async loadItems(item){
    let demographicData = await apiCalls.getItems(item);
    this.setState({ demographicData });
  }

  handleChange = (selectedItem) => {
    this.loadItems(selectedItem.label.props.children)
    this.setState({ selectedItem: selectedItem.label.props.children })
  }
 

  render(){
    const { demographicData, selectedItem } = this.state;
    const list = this.state.columns.map((item, index) => (
      <div key={index} >{item}</div>
    ));

    return (
      <div>
        <h1>Please choose a category</h1>
          <Dropdown options={list} onChange={this.handleChange} value={selectedItem} placeholder="Select an option" />
          <ul>
            <Display
            demographicData={demographicData}
            selectedItem={selectedItem}
            />
          </ul>
      </div>
    )
  }
}

export default Main;