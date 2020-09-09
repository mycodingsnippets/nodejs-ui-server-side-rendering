import React, {Component} from "react";

class Message extends Component{

    constructor(props) {
        super(props);
        this.state = {
            message: 'Please Subscribe',
            btnText: 'Subscribe'
        }
    }


    changeMessage(){
        // if(this.state.btnText === 'Subscribe'){
        //     this.setState({
        //         message: 'Thanks for Subscribing',
        //         btnText: 'Subscribed'
        //     }, () => {
        //         console.log('State Changed')
        //     })
        // }else{
        //     this.setState({
        //         message: 'Please Subscribe',
        //         btnText: 'Subscribe'
        //     }, () => {
        //         console.log('State Changed')
        //     })
        // }
        this.setState((prevState, props) => ({
            message: prevState.message === 'Please Subscribe' ? `Thanks fir Subscribing ${props.name}` : 'Please Subscribe',
            btnText: prevState.btnText === 'Subscribe' ? 'Subscribed' : 'Subscribe'
        }))
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>{this.state.btnText}</button>
            </>
        );
    }
}

export default Message