import React from 'react'
import axios from 'axios';
import './Button.css'

class Button extends React.Component{
    constructor(props){
      super(props)
      this.state = { email:'',name:'', title:''}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    // FORM SUBMITTING logic, prevent default page refresh 
   

    handleSubmit(event){
      // alert("Working") 
      const { email, name, title } = this.state

      /* 
      ####################
      ADD API HERE: 
      ####################
      */
      axios.put('PUT API HERE', {email: email, title: title, name: name});
      alert("Hopper Submitted.")
      console.log(event)
    }
    /*
    componentDidMount: function() {
      this.getDOMNode().onclick = function() {}
    }
    */
   
    // Method causes to store all the values of the 
    // input field in react state single method handle 
    // input changes of all the input field using ES6 
    // javascript feature computed property names

    handleChange(event){
      this.setState({
        // Computed property names
        // keys of the objects are computed dynamically
        [event.target.name] : event.target.value
      })
    }
    
    // Return a controlled form i.e. values of the 
    // input field not stored in DOM values are exist 
    // in react component itself as state
    render(){
      return(
        <form onSubmit={this.handleSubmit} class='FormHolder'>
          <h2>Add a Hopper: </h2>
          <div>
            <label class='LabelTitle' htmlFor='name'></label>
            <input 
              class='InputBox'
              name='name'
              placeholder='Full Name' 
              value = {this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label class='LabelTitle' htmlFor='email'></label>
            <input 
              class='InputBox'
              name='email'
              placeholder='Email' 
              value = {this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label class='LabelTitle' htmlFor='title'></label>
            <input
              class='InputBox'
              name='title' 
              placeholder='Title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button class='ButtonClass' >Add Hopper</button>
          </div>
        </form>
      )
    }
  }
    
  export default Button