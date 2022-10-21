import React from 'react';
class SampleComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            name: "elias"
        }
        
    }
    updateCounter(){
        this.setState((prevState, props)=>{
        return {counter:prevState.counter+1}
    });
       
    }
    updateMultiple(){
        this.updateCounter();//1
        this.updateCounter();//1
        this.updateCounter();//1
        this.updateCounter();

    }


    render() {
        return (<div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>{this.updateMultiple()}}>Click me!</button>
                </div>);
    }

}

export default SampleComponent;