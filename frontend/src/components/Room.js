import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Button, Typography } from  "@mui/material";

export default function Room(props) {

    const [votesToSkip, setVotesToSkip] = useState(1);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);

    const {roomCode} = useParams();

    fetch('/api/get-room?code=' + roomCode)
    .then((response) => response.json())
    .then((data) => {
        setVotesToSkip(data.votes_to_skip);
        setGuestCanPause(data.guest_can_pause);
        setIsHost(data.is_host); 
    });

    const getRoomDetails = () => {
        return (
            fetch("/api/get-room?" + "code=" + this.roomCode)
            .then((response) => {
                if (!response.ok){
                    pass
                }
            })
        );
    };

    const leaveButtonPressed = () => {

    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography variant="h4" component="h4">
                    Code: {roomCode}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="h6" component="h6">
                    Votes: {votesToSkip}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="h6" component="h6">
                    Guest Can Pause: {guestCanPause.toString()}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="h6" component="h6">
                    Host: {isHost.toString()}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.leaveButtonPressed}
                >
                    Leave Room
                </Button>
            </Grid>
        </Grid>
    );
}