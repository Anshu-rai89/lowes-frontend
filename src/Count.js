import React, { Component } from 'react';

// Stateful component 
class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            username: 'rahul'
        }

        console.log("constructor is called");
        this.handleIncrementOnClick = this.handleIncrementOnClick.bind(this);
    }

    componentDidMount(){
        console.log("componentDidMount is called");
    }

    shouldComponentUpdate(currentProps, currentState){
         console.log(
           "shouldComponentUpdate is called",
           currentProps,
           currentState
         );
         return true;
    }

    componentWillUnmount(){
        console.log("componentWillUnmount is called");
    }

   handleIncrementOnClick (event) {
        
        // Its an async function 
        this.setState({count: this.state.count + 1}, ()=> {
            console.log("State updated")
        })

       // Updating state using a callback
    //    this.setState((prevState)=> {
    //         return { count: prevState.count + 1}
    //    }, ()=> {
    //     console.log("State is updated",);
    //    })
        console.log("Increment onclick triggered" ,this.state.count);
   }

    render() {
        const {count} = this.state;
        console.log("Render", count);
        return (
          <div>
            <h3>Count : {count} </h3>
            <div>
              <button onClick={this.handleIncrementOnClick}>Increment</button>
            </div>
          </div>
        );
    }
}

export default Count;