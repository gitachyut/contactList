import React,{ Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import {addContact} from '../action';

import Form from './form';
import List from './list';


class App extends Component{
  static propTypes={
    dispatch : PropTypes.func.isRequired,
    contacts : PropTypes.array.isRequired,
    flitered : PropTypes.array.isRequired,
  }
  constructor(props){
    super(props);
  }


  render(){
    let list = [];
    if(this.props.flitered === null ){
      list = this.props.contacts
    }else{
      list = this.props.flitered
    }

    return(
      <div>
        <Form
          dispatch={this.props.dispatch}
        />
        <List
          contacts={list}
        />
      </div>
    )
  }
}

const mapStateToProps = (state)=> state;
const mapDispatchToProps = (dispatch) =>{
  return {
    dispatch
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
