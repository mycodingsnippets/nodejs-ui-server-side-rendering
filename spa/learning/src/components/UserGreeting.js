import React, {Component} from "react";

class UserGreeting extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    render(){
        return (
            <>
                {this.state.isLoggedIn ? <div>Your work in SAG is commendable</div> : <div>Please Log In</div>}
            </>
        )
    }

}

export default UserGreeting