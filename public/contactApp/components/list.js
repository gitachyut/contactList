import React,{ Component,PropTypes } from 'react';
export default class List extends Component{
  static propTypes={
    contacts : PropTypes.array.isRequired
  }

  render(){
    let list = '';
    if(this.props.contacts.length == 0){
      list = <i>Empty Conatct List</i>
    }else{
      list = this.props.contacts.map((e,i)=>{
        return (
          <div key={e.id} className="user">
            <i >{e.name}, {e.number}</i>
          </div>
        )
      })
    }

    return(
      <div className="list">{list}</div>
    )
  }
}
