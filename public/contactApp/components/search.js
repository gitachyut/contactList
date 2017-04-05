import React,{ Component,PropTypes } from 'react';
import {connect} from 'react-redux';
import {fliterContact,fliterEmpty} from '../action';
class Search extends Component{
  static propTypes={
    dispatch : PropTypes.func.isRequired,
  }
  constructor(props){
    super(props);
    this.state ={
      keyword : ''
    }
  }
  filter(ev){
    if(ev.target.value){
      var newList = this.props.contacts.filter((e,i)=>{
        var newName = e.name.toLowerCase();
        var newKey = ev.target.value.toLowerCase();
        return newName.includes(newKey);
      })
      this.setState({
        keyword : ev.target.value
      });
      if(newList.length==0){
        this.props.dispatch(fliterContact(newList=[]))
      }else{
        this.props.dispatch(fliterContact(newList))
      }

    }else{
      this.setState({
        keyword : ''
      });
      this.props.dispatch(fliterEmpty())
    }
  }
  render(){
    return(
      <div style={{padding :'10px 0'}} className="serach">
        <input
          placeholder="Search User"
          type="text"
          value={this.state.keyword}
          onChange={this.filter.bind(this)}
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
export default connect(mapStateToProps,mapDispatchToProps)(Search)
