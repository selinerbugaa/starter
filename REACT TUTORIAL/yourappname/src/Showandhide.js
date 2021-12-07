import React from 'react'

class Showandhide extends React.Component{

    state ={
        divcontainer : false,
    }

    
    render(){
        var HandleChange = e =>{
            this.setState({divcontainer:!this.state.divcontainer});
        }
        const x = this.state.divcontainer

        return(
            <center>
            <div>
                <h1>Show div element</h1>
                <button onClick={HandleChange}>{x ? '' : 'Show'}</button>
                {
                    x &&(<div>            <input type="text" ></input>
                    </div>)
                
                }
            </div>
            </center>
        );
    }
}

export default Showandhide;