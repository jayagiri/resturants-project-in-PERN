import React, { Component } from 'react'

 class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:'',
      }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })


    }
    handlePasswordChange=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    handleSubmit=event=>{
      event.preventDefault();

    }
  render() {
    return (
      <div >
        <form className="p-4" onSubmit={this.handleSubmit}>
            <div>
        <label className="m-1" >Username</label>
        <input className="m-1"  type='text' value={this.state.username}onChange={this.handleUsernameChange} />
        <div> <label className="m-2"  >Password</label>
        <input type='text' value={this.state.password} onChange={this.handlePasswordChange}></input>
        </div>
        <button className="m-4">Submit</button>
        </div>
        <div>
            <label>Dont have account ? </label>
            <button className="m-2" >Register now</button>
        </div>
        </form>
      </div>
    )
  }
}

export default Login
