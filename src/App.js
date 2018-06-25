import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar'

import MessageList from './components/MessageList'


const messageList=[
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      messageList
    }
  }

  handleToolbarCheckbox=(checked)=>{
    // Read messageList from state
  const messageList=this.state.messageList
  // Loop in each message and update message.selected = checked
  for(let i=0;i<messageList.length;i++){
    const message=messageList[i]
    message.selected=checked
  }
  console.log('messageList ', messageList)
  // Update state
  this.setState({messageList})
  }
  onMessageSelect=(id)=>{
    const messageList = this.state.messageList;

    // find matched message as per id and update selected property
    for(let i=0;i<messageList.length;i++){
      const message=messageList[i]
      if(message.id===id){
        message.selected= !message.selected
      }

    }
    // update state with modified messageList
    this.setState({messageList})
  }
  handleToolbarMarkAsRead = ()=>{
    // Read messageList from state
  const messageList=this.state.messageList
  // Loop in each message and update message.selected = checked
  for(let i=0;i<messageList.length;i++){
    const message=messageList[i]
    message.read = message.selected;
  }
  // Update state
  this.setState({messageList})
  }

  handleToolbarMarkAsUnRead=()=>{
    const messageList=this.state.messageList
    for(let i=0;i<messageList.length;i++){
      const message=messageList[i]
      message.read = !message.selected;
    }
      this.setState({messageList})
  }

handleToolbarAddLabel=(label)=>{
const messageList=this.state.messageList
for(let i=0;i<messageList.length;i++){
  const message=messageList[i]
  // only for selected message
  if(message.selected){
    if(message.labels.indexOf(label)==-1){
    message.labels.push(label)
  }
}
}
this.setState({messageList})
}

handleToolbarRemoveLabel=(label)=>{
const messageList=this.state.messageList
for(let i=0;i<messageList.length;i++){
  const message=messageList[i];
  // only for selected message
if(message.selected){
  const index=message.labels.indexOf(label)
  if (index !== -1) {
    message.labels.splice(index,1)
  }
}

}
this.setState({messageList})
}


deleteSelectedMessage=(message)=>{
  const messageList=this.state.messageList;
const newMessageList=messageList.filter(message=>!message.selected)

    this.setState({messageList:newMessageList})

    }

render() {
    return (
      <div className="App">
      <Toolbar
      messageList={this.state.messageList}
      handleToolbarMarkAsRead={this.handleToolbarMarkAsRead}
      handleToolbarMarkAsUnRead={this.handleToolbarMarkAsUnRead}
      handleToolbarAddLabel={this.handleToolbarAddLabel}
      handleToolbarRemoveLabel={this.handleToolbarRemoveLabel}
       deleteSelectedMessage={this.deleteSelectedMessage}
      handleToolbarCheckbox={this.handleToolbarCheckbox}/>
      <MessageList messageList={this.state.messageList} onMessageSelect={this.onMessageSelect} />
      </div>
    );

  }
}

export default App;
