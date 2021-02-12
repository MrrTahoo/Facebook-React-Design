import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Posts from "./Components/Posts";
import ChatBar from "./Components/ChatBar";
import ChatBox from "./Components/ChatBox";


function App() {
    const [state, setState] = React.useState(false);
    const [current, setCurrent] = React.useState({});
    const openChat = (user) => {
        setState(true);
        setCurrent(user);
    };
    const closeChat = () => {
        setState(false);
    };
    return (
        <div className="App">
            <Navbar />
            <div className="facebook">
                <SideBar />
                <Posts />
                <ChatBar openChat={openChat} />
                <ChatBox state={state} current={current} closeChat={closeChat} />
            </div>
        </div>
    );
}

export default App;