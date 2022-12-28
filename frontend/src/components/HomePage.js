import React, { Component } from "react";
import JoinRoomPage from "./JoinRoomPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { BrowserRouter as Router, Routes, Route, Link, Redirect }  from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<p>This is the home page</p>}></Route>
                    <Route exact path="/join" element={<JoinRoomPage/>}></Route>
                    <Route exact path="/create" element={<CreateRoomPage/>}></Route>
                    <Route exact path="/room/:roomCode" element={<Room/>}></Route>
                </Routes>
            </Router>
        );
    }
}