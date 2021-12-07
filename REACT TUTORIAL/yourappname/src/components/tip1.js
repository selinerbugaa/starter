import React, { Component } from 'react'


class tip1 extends Component {
    
    constructor(props) {
        super(props);
        this.initialState = {
            divcontainer : false

        };
        this.state = this.initialState;
    }
  
    state ={
        divcontainer : false
    }
    
    onResetClick(e) {
        e.preventDefault();
        this.setState(this.initialState);
    }
    sendService = (serviceData)=>{
        this.props.callback(serviceData.target.value);
    }

    render() {



        
        var HandleChange = e =>{
            this.setState({divcontainer:!this.state.divcontainer});
        }
     
        let button ;
        if(this.state.divcontainer ){
           button =  <input type="text" onChange={(serviceData) => this.sendService(serviceData)} ></input>
        

        }else{
            button = <button className="custombutton" type="button"  onClick={HandleChange}>Custom</button>
        }
        return (
            <div>
               <form>
                  
               <button className="button1" type="button" value="5"  onClick={(serviceData) => this.sendService(serviceData)}>5 %</button>
               <button className="button1" type="button" value="10"  onClick={(serviceData) => this.sendService(serviceData)}>10 %</button>
               <button className="button1" type="button" value="15"   onClick={(serviceData) => this.sendService(serviceData)}>15 %</button>
               <br />
               <button className="button1" type="button" value="25"  onClick={(serviceData) => this.sendService(serviceData)}>25 %</button>
               <button className="button1" type="button" value="50"  onClick={(serviceData) => this.sendService(serviceData)}>50 %</button>
               {button}

             
          
               
                </form> 
            </div>
        )
    }
    
} 
export default tip1;