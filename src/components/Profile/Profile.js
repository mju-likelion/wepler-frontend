import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import board from "BoardData.json";
import { ListItem, 
    Box, 
    BoxLeft, 
    BoxBig, 
    BoxName, 
    BoxExplan, 
    HashBox } from "../Profile/ProfileStyled";

class Profile extends Component {
    state = {
        borads: [],
    };
    render() {

        return (
            <>
                {board.map((item) => {
                    return (
                        <Box>
                            <BoxLeft />
                            <BoxBig>
                                <ListItem key={item.number}>
                                    <Link to="/plusseoulde">
                                        {/* <Link to={`/plusseoulde/${item.number}`}> */}
                                        <BoxName>
                                            <h2>{item.plus_id}</h2>
                                        </BoxName>
                                        <BoxExplan>
                                            <div>{item.plus_oneself}</div>
                                            <div>평균평점: {item.plus_rating}</div>
                                            <HashBox>{item.plus_fields}</HashBox>
                                        </BoxExplan>
                                    </Link>
                                </ListItem>
                            </BoxBig>
                        </Box>
                    )
                })}
            </>
        )
    }
}

export default Profile;
