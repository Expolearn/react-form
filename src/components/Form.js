import React, { Component } from 'react';
import styled from 'styled-components';

const Forms = styled.div`

background: grey;

Forms {
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
    box-shadow: #3d3d3d;
    border: red;
}

wrapper {
  align-items: center;
  justify-content: center;
}

input {
    display:block;
    border:1px solid #d9d9d9;
    border-radius:4px;
    box-sizing:border-box;
    padding:10px;
    
}

label {
    color: #3d3d3d;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
}

button {
    width: 110px;
    height: 35px;
    background-color: #4eb5f1;
    padding: 2px 3px;
    margin: 0 3px 4px 0;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 500;
    text-align: center;
    transition: all 0.2s;

}

button:hover{
background-color: green;

}


`;

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fullName:'',
            email:'',
            address:'',
            password:''
         }
    }

    handleFullName = (e)=> {
        this.setState({
          fullName: e.target.value
        })
    }

        handleEmail = (e)=> {
            this.setState({
              email: e.target.value
            })
        }

            handleAddress = (e)=> {
                this.setState({
                  address: e.target.value
                })
            }

                handlePassword = (e)=> {
                    this.setState({
                      password: e.target.value
                    })
                }
    


    render() { 
        return ( 

            <Forms>

                <wrapper>
               
                <label for='full name'>Full Names</label>
                <input type='text' id='username' onChange = {this.handleFullName}></input>
                
                <br/>
                
                <label for='email'>Email</label>
                <input type='email' id='username' require onChange = {this.handleEmail}></input>
                
                    <br/>
                
                <label for='address'>Address</label>
                <input type='text' id='username' onChange = {this.handleAddress}></input>
                <br/>

                <label for='password'>Password</label>
                <input type='password' id='username' require onInput = {this.handlePassword} onChange = {this.handlePassword}></input>
                
                <br/><br/>
               
                
                <button type='submit' onSubmit = {this.handleSubmitForm}>Login</button>


                   <br/><br/><br/>

                    {this.state.fullName}<br/><br/>
                    {this.state.email}<br/><br/>
                    {this.state.address}<br/><br/>
                    {this.state.password}

                    <br/><br/><br/>
                       
                </wrapper>

                
                    
            
            </Forms>
           
         );
    }
}
 
export default Form;