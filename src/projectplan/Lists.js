import React, { Component } from 'react';
import CardItem from './CardItem';
import InputNew from './InputNew';

// import MobileTearSheet from 'material-ui/MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class Lists extends Component {
  constructor(props) {
     super(props);
     this.state = {header:this.props.header,case:this.props.item,statusAdding:this.props.item.status, status:this.props.status, sid:this.props.sid,listUserCanAddProject:props.listUserCanAddProject}
     this.onAddNew = this.onAddNew.bind(this);
     this.onAdding = this.onAdding.bind(this);
     this.onEdit = this.onEdit.bind(this);
     this.onEditChange = this.onEditChange.bind(this);
     this.onDelete = this.onDelete.bind(this);
  }
  onAddNew(data){
    this.props.onAddNew(this.state.sid, data);
  }
  onAdding(sid){
    this.props.onAdding(sid);
    this.render();
  }
  onEdit(sSid){
      this.props.onEdit(this.state.sid, sSid);
  }
  onEditChange(sid, value){
    this.props.onEditChange(this.state.sid, sid, value);
  }
  onDelete(sid){
    this.props.onDelete(this.state.sid, sid);
  }
  handleChangeStaffCase = (ticketSid, emailNewOwner) => {
      this.props.onChangeStaffCase(ticketSid, emailNewOwner);
  };
  render(){
    var casetype = [];
    this.state.case.forEach((item) => {
      casetype.push(<CardItem onChangeStaffCase={this.handleChangeStaffCase} listUserCanAddProject={this.props.listUserCanAddProject} case={item} key={item.sid} onEdit={this.onEdit} onEditChange={this.onEditChange} onDelete={this.onDelete} />);
    });
    const style = {
      header: {
        margin: '0px 0px',
        paddingLeft: '5px'
      },
      box: {
        'width':300,'padding':'8px','margin':'0px 10px','border': '1px solid rgb(217, 217, 217)','background': '#fafbfc', 'borderRadius': '3px'
      }
    }
    return (
      <List style={style.box} >
        <Subheader style={style.header}>{this.props.header}</Subheader>
        {casetype}
        <InputNew onAddNew={this.onAddNew} toggleTextarea={this.props.status} onAdding={this.onAdding} sid={this.props.sid} statusAdding={this.props.status} initialValue={""} />
      </List>
    );
  }
}
export default Lists;
