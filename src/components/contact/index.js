import React, {Component} from 'react';
import './style.css'


class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, email, message} = this.state
    if (name === ""){
      alert("You need to enter your name")
    } else if (email === ""){
      alert("You need to enter your email")
    } else if (message === ""){ 
      alert("Please leave a message")
    } else{
      alert(`Dear ${this.state.name}:\nYour message has been sent`)
    }

    this.setState({
      name: "",
      email: "",
      message: ""
    })
    
  }

  handleInputChange = (event) => {
    // console.log(event.target)
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-7">
          <h1>Contact</h1>

          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input value={this.state.name} onChange={this.handleInputChange} type="email" className="form-control" id="nameInput" name="name"/>
          </div>

          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email</label>
            <input value={this.state.email} onChange={this.handleInputChange} type="email" className="form-control" id="emailInput" name="email"/>
          </div>

          <div className="mb-3">
            <label htmlFor="messageInput" className="form-label">Message</label>
            <textarea onChange={this.handleInputChange} className="form-control" id="messageInput" name="message" rows="3"></textarea>
          </div>
          
          <button type="submit" className="btn btn-dark mb-3" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default Contact;