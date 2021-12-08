
import './App.css';
import Tip from "./components/tip1";
import React from 'react';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.initialState = {
      total: "",
      service: "",
      party: "",
      tipPP:"",
      tipTotal:""
    };
    this.state = this.initialState;
}
onResetClick(e) {
    e.preventDefault();
    this.setState(this.initialState);
}
  
  state={
    total: "",
    service: "",
    party: "",
    tipPP:"",
    tipTotal:""
  }

  handleTotal =(event) =>{
  this.setState({
    total : event.target.value
  
  })
}


handleService =(event) =>{
  this.setState({
    service : event.target.value
  
  })
}

handleParty =(event) =>{
  this.setState({
    party : event.target.value
  
  })
}

genTip =(event)=>{
  event.preventDefault();
  let tip = parseFloat(this.state.total /100  * this.state.service).toFixed(2)
  let totalTipPP = parseFloat(tip / this.state.party).toFixed(2)
  this.setState({
    tipTotal: tip,
    tipPP : totalTipPP
  })
}

callBackServiceSelected = (serviceData) => {
  this.setState({service : serviceData})
}


  render (){
    return (
        <div>
          <h1 className="header"> <center><p>S P L I <br /> T T E R  <br /> </p></center></h1>


        <div className="kutu">
          <form onSubmit ={this.genTip}>
           <p> <h3 className="header1"> Bill </h3>
            <input type="text" value={this.state.total} onChange={this.handleTotal} ></input>
            <i class="fas fa-dollar-sign"></i>
   
            </p>
            <label className="header1"> Selected Tip
          
            <Tip callback={this.callBackServiceSelected} />
                     
            </label>
           <p> <h3 className="header2"> Number of People</h3>
            <input type="text" value={this.state.party} onChange={this.handleParty} ></input>
            <i class="fas fa-user"></i>
            </p>
            <input type="submit"></input>
          </form>
          <p className="tipclass"> Tip Amount : ${this.state.tipTotal}  </p> <p>
          <p className="tipclass1"  > Total : ${this.state.tipPP}</p>
          <button className="resetbutton" type="button" onClick={this.onResetClick.bind(this)}>Reset</button></p>
          
         
          </div>
        </div>

    )
  }

}

export default App;
