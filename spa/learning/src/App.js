import React from 'react';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
        <Greet name="Aditya">
            <p>You inspire us a developer</p>
        </Greet>
        <Welcome name="Best"/>
        <Message name="Aditya"/>
        <hr/>
        <FunctionClick/>
        <EventBind/>
        <hr/>
        <ParentComponent/>
        <UserGreeting/>
        <hr/>
        <NameList/>
        <Stylesheet/>
        <Form/>
    </div>
  );
}

export default App;
