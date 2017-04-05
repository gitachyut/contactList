import React,{ Component,PropTypes } from 'react';
import {addContact} from '../action';
export default class Form extends Component{
  static propTypes={
    dispatch : PropTypes.func.isRequired
  }
  constructor(props){
    super(props);
    this.state = {
      name : '',
      number : ''
    }
  }

  _onSubmit(e){
    e.preventDefault();
    if(this.state.name && this.state.number){
      this.props.dispatch(addContact(this.state));
    }
    this.setState({
      name : '',
      number : ''
    })
  }
  render(){

    return(
        <form onSubmit={this._onSubmit.bind(this)}>
          <input
            placeholder="Name"
            onChange={(e)=>this.setState({
              name : e.target.value
            })}
            value={this.state.name}
            type="text"/>
          <input
            placeholder="Number"
            onChange={(e)=>this.setState({
              number : e.target.value
            })}
            value={this.state.number}
            type="text"/>
          <button onClick={this._onSubmit.bind(this)}>ADD CONTACT</button>
        </form>
    )
  }
}
