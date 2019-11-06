import React from 'react';
import './App.css';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name:'',
      age:'',
      gender:'',
      email:'',
      number:'',
      userform:[],
      usercount:0
    }
    this.validate=this.validate.bind(this);
    this.onSubmit=this.onSubmit.bind(this); 
    this.baseState = this.state; 
  }
  resetForm = () => {
    this.setState(this.baseState);
  }
  validate() {
    if (this.state.name.length > 3) {
      if (this.state.age.length > 1) {
        if (this.state.gender.length > 2) {
          if (this.state.email.length > 8) {
            if (this.state.number.length > 9) {
              if (this.state.userform.length > 0) {
                if (this.state.number !== this.state.userform[this.state.userform.length - 1].number && this.state.email !== this.state.userform[this.state.userform.length - 1].email) {
                  if (this.state.number.length === 10) {
                    if ((new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.email))) {
                      if ((parseInt(this.state.age)) >= 18) {
                        this.onSubmit();
                      } else {
                        alert('You are not an adult');
                      }
                    } else {
                      alert("Email is not valid");
                    }
                  } else {
                    alert('Enter a valid 10 digits number');
                  }
                } else {
                  alert('Number or email already exists');
                }
              } else {
                if (this.state.number.length === 10) {
                  if (new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.email)) {
                    console.log(parseInt(this.state.age) >= 18)
                    if (parseInt(this.state.age) >= 18) {
                      this.onSubmit();
                    } else {
                      alert('You are not an adult');
                    }
                  } else {
                    alert("Email is not valid");
                  }
                } else {
                  alert('Enter a valid 10 digits number');
                }
              }
            } else {
              alert("Number required!");
            }
          } else {
            alert("Email required!");
          }
        } else {
          alert("Gender required!");
        }
      } else {
        alert("Age required!");
      }
    } else {
      alert("Name required!");
    }

  }

  onSubmit(){
      this.state.userform.push({name:this.state.name,age:this.state.age,gender:this.state.gender,email:this.state.email,number:this.state.number});
      this.setState({usercount:this.state.usercount+1});
      //this.resetForm();
  }

  render(){
    return(
        <div style={{textAlign:'center'}}>
          <h1 style={{textAlign:"center"}}>User Form Registration</h1>
          <p style={{textAlign:'right',margin:20, textDecoration:'underline'}}>Total Registered User:<UserCount usercount={this.state.usercount} /></p>
          <div className="form" id="firstdiv">
              <label >Name</label>
              <input type="text" value={this.state.name} placeholder="Enter your name" onChange={event=> this.setState({name:event.target.value})} />

              <label>Age</label>
              <input type="number" value={this.state.age} placeholder="Enter your age" onChange={event=> this.setState({age:event.target.value})} />

              <label>Gender</label><br/>
              <input type="radio" name="gender" value="Male"  onChange={event=> this.setState({gender:event.target.value})} />Male
              <input type="radio" name="gender" value="Female" onChange={event=> this.setState({gender:event.target.value})} />Female
<br/>

              <label>Email</label>
              <input type="text" value={this.state.email} placeholder="Enter your mail id" onChange={event=> this.setState({email:event.target.value})} />

              <label>Number</label>
              <input type="number" value={this.state.number} placeholder="Enter your mobile number" onChange={event=> this.setState({number:event.target.value})} />
              <div id="btn">
                <input type="submit" value="Submit" onClick={()=> this.validate()}/>
              </div>
          </div>
          <div id="seconddiv">
              <DisplayUser userdata={this.state.userform} usercount = {this.state.usercount} />
          </div>
          
        </div>
    );
  }
}

class UserCount extends React.Component{

  render(){
    return(
        <b>{this.props.usercount}</b>
    );
  }
}

class DisplayUser extends React.Component{

  render(){
    return(
        <div style={{textAlign:'center'}}>
          <h2 style={{textAlign:'center'}}>User List</h2>
          {this.props.usercount>0?(
            
            <table style={{display:'inline-block'}} id="users">
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                  {this.props.userdata.map((data,index)=>
                   <tr key={index}>
                      <td>{index+1}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.gender}</td>
                      <td>{data.email}</td>
                      <td>{data.number}</td>
                      </tr>
                    )}
              </tbody>
            </table>
            ):[]}
        </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }