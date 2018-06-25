import React from 'react';
import PropTypes from 'prop-types';
class Toolbar extends React.Component {
  contructor(props){

  this.state={
    checked:this.props.read,
  }
}

  checkboxClass(){
      const messageList=this.props.messageList;
      // find out count of selected message
      let count=0;
      for(let i=0;i<messageList.length;i++){
        const message=messageList[i]
        if(message.selected){
          count++
        }
      }
      console.log(count);
      if(count===0){
        return 'fa-square-o'
      }
      if(count===messageList.length){
        return 'fa-check-square-o'
      }
      return 'fa-minus-square-o'
  }
  getCheckboxStatus = ()=> {
    const checkboxClassName = this.checkboxClass();
    if(checkboxClassName === 'fa-square-o') { // currently unchcked
      return true; // to convert from uncheck to check
    }
    return false; // to convert from check to uncheck
  }
  getDisabled=()=>{
    const messageList=this.props.messageList;
    let count=0;
    for(let i=0;i<messageList.length;i++){
      const message=messageList[i]
      if(message.selected){
        count++
      }
    }
      if(count===0){
        return { disabled: 'disabled' }; // return disable if none of the message are selected
      }
        return {}; // if any of message is selected then do not disable.
    }
getUnreadMessageCount = ()=>{
  const messageList=this.props.messageList;
  let count=0;
  for(let i=0;i<messageList.length;i++){
    const message=messageList[i]
    if(!message.read){
      count++
    }
  }
  return count;
}





render() {
   const checkboxClassName = this.checkboxClass();
   const checkboxStatus = this.getCheckboxStatus();
   const disabledProp = this.getDisabled();
   const unreadMessageCount = this.getUnreadMessageCount();

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{unreadMessageCount}</span>
            unread messages
       </p>
       <a class="btn btn-danger">
       <i class="fa fa-plus"></i>
       </a>
    <button className="btn btn-default">
      <i className={`fa ${checkboxClassName}`} onClick={()=>this.props.handleToolbarCheckbox(checkboxStatus)} ></i>
    </button>

    <button className="btn btn-default" onClick={this.props.handleToolbarMarkAsRead} {...disabledProp}>
      Mark As Read
    </button>

    <button className="btn btn-default" onClick={this.props.handleToolbarMarkAsUnRead} {...disabledProp}>
      Mark As Unread
    </button>

    <select className="form-control label-select" onChange={(event)=>event.target.value !=='Apply label' && this.props.handleToolbarAddLabel(event.target.value)} {...disabledProp}>
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select" onChange={(event)=>event.target.value !=='Remove label' && this.props.handleToolbarRemoveLabel(event.target.value)}{...disabledProp}>
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default" onClick = {this.props.deleteSelectedMessage} {...disabledProp}>
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
</div>
)
}
}
Toolbar.propTypes = {
  messageList: PropTypes.array,
}

Toolbar.defaultProps = {
  messageList: []
};
export default Toolbar;
