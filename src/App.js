import React, { Component } from 'react';
import './App.css';
import question from './question.svg';
import DetailModal from './components/DetailModal';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      successMessage: "Your words have been submited. Thank you.",

      detail: `Hey! Are you not satisfied with our service? Or perhaps 
        you're satisfied and you want us to know about it.
        Whichever one, just drop a message. Stay anonymous while telling
        us how to serve you better 😊 `
    }
    //this.form = React.createRef();
  }
  showDetail(){
    let shownow = document.querySelector(".modal-content");
    shownow.style.display = "block";
  }
  handleClick(e){
    let messageValue = document.getElementById('message');
    let userMessage = document.getElementById('userMessage');
    e.preventDefault();
    if(messageValue.value === ""){
     return;
    }
    let message = document.querySelector(".success-message");
    message.style.display = "block"
    setTimeout(function(){message.style.display = "none"}, 4000);
    userMessage.reset();
  }
 
  render() {
    return (
      <div className = "app-body">
        <div className = "nav-content">
          <h3>User Feedback Box</h3>
        </div>

        <DetailModal detail={this.state.detail} className = "modal" />
      
        <div className ="content-body">
          <div className = " what-is-this">
            <h4 className = "text-title"> Feedback Box </h4>
            <img src = {question} className = "question" alt = "about this" onClick = {this.showDetail} />
          </div>
          <form id = "userMessage">
            <textarea name="message" placeholder="Type your message.." id="message" className="user-message"></textarea>
            <p className = "success-message">{this.state.successMessage}</p>
            <div className="button">
              <input type="submit" className="submit-button" value = "Submit" onClick = {this.handleClick} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
