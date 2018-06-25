import React from 'react';
import PropTypes from 'prop-types';

class Message extends React.Component {
  constructor(props){
    super(props)
    this.state={
      checked:this.props.selected,
      starred:this.props.starred
    } //initialize state in same way how we initialize variable in class
  }
  componentWillReceiveProps(nextProps){
    this.state={
      checked:nextProps.selected,
      starred:nextProps.starred
    }
  }
  handleCheckbox = ()=> {
    this.setState({checked:!this.state.checked});
    this.props.onMessageSelect(this.props.id)
  }
  handleStarred=()=>{
    this.setState({starred:!this.state.starred})
  }
  render() {
    const read=this.props.read; // in class while passing props use this.props
    const selected=this.props.selected;
    const labels=this.props.labels;
    const children = this.props.children;
    const starred=this.props.starred;
    return (
      <div className={`row message ${read ? 'read':'unread'}
      ${this.state.checked ? 'selected':''} `}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
              type="checkbox"
              onClick={this.handleCheckbox}
              checked={this.state.checked}/>
            </div>
            <div className="col-xs-2">
              <i className={` ${this.state.starred? 'star fa fa-star':'star fa fa-star-o'}`}
              onClick={this.handleStarred}
              ></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
      {labels.map(label=>(<span className="label label-warning">{label}</span>))} {/*made labels tag dynamic*/}
      <a href="#">
            {children}
          </a>
        </div>
        </div>
    );
  }
}

Message.propTypes = {    //define PropTypes
  read: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  labels: PropTypes.array,
  starred:  PropTypes.bool.isRequired,
  onChecked:  PropTypes.func.isRequired,
  onStarred:  PropTypes.func.isRequired,
};
Message.defaultProps = {
  labels: []
};

export default Message;
