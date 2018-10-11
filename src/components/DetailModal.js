import React, { Component } from 'react';

class DetailModal extends Component {
	hideDetail(){
      let hideOnClick = document.querySelector(".modal-content");
      hideOnClick.style.display = "none";
    }
 
	
	render(){
	  return(
		<div className="modal-content">
          <span className="close" onClick = { this.hideDetail}>×</span>
          <p>{this.props.detail} </p>
        </div>
	  )
	}
}
export default DetailModal;