import React from 'react'


const Register = () => {
  return (
    <div>
      <form  onSubmit={this.handleRegister}>
            <div>
        <label>First Name</label>
        <input type='text' value={this.state.firstName}onChange={this.handleFirstName} />
        <label>Last Name</label>
        <input type='text' value={this.state.lastName} onChange={this.handleLastName}></input>
        <label>Email</label>
        <input type='text' value={this.state.email} onChange={this.handleEmail}></input>
        <label>Password</label>
        <input type='text' value={this.state.registerPassword} onChange={this.handleRegisterPassword}></input>
        <label>Confirm Password</label>
        <input type='text' value={this.state.email} onChange={this.handleEmail}></input>
        <button>Register</button>
        </div>
        <div>
            <label>Dont have account ? </label>
            <button>Register Now</button>
        </div>
        </form>
    </div>
  )
}

export default Register
