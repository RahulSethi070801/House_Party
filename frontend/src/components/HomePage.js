import React, { useState, useEffect, Component } from "react";
import JoinRoomPage from "./JoinRoomPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from  "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link, Redirect }  from "react-router-dom";
import { Navigate } from "react-router-dom";


function RenderHomePage (props) {

    // console.log(props.roomCode, "hehe finally");
    if (props.roomCode){
        return (
            <Navigate replace to={`/room/${props.roomCode}`} />
        );
    }
    else{
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <Typography variant="h3" compact="h3">
                        HOUSE PARTY
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <ButtonGroup disableElevation variant="contained" color="primary" size="large">
                        <Button color="primary" to="/join" component={Link}>
                            Join a Room
                        </Button>
                        <Button color="secondary" to="/create" component={Link}>
                            Create a Room
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        );
    }
};

export default function HomePage(props) {

    const [roomCode, setRoomCode] = useState(null);

    useEffect(() => {
        fetch("/api/user-in-room")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data.code, " codee");
            setRoomCode(data.code);
        })
    }, []);


    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={roomCode? (<Navigate replace to={`/room/${roomCode}`} />): renderHomePage(roomCode={roomCode})}></Route> */}
                <Route exact path="/" element={<RenderHomePage roomCode={roomCode} />}></Route>
                <Route exact path="/join" element={<JoinRoomPage/>}></Route>
                <Route exact path="/create" element={<CreateRoomPage/>}></Route>
                <Route exact path="/room/:roomCode" element={<Room/>}></Route>
            </Routes>
        </Router>
    );
};