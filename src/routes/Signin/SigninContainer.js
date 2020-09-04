import React from "react";
import axios from "axios";
import SigninPresenter from "./SigninPresenter";
import { makeStyles } from '@material-ui/core/styles';

export default class extends React.Component {
    state = {
        email: null,
        loading:true,
    }
    async postBoard() {
        try{
            const {data: {results: email}}= await axios.post('/tokentest/', {
                email: this.state.email,
            });
            console.log(email);
            this.setState({
                email,
            });
        }catch{
            this.setState({
                error: "Can't find movie information."
            })
        }finally{
            this.setState({
                loading: false
            });
        }
        
        
    }

    classes = makeStyles((theme) => ({
        
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    render() {
        const { email } = this.state;
        const classes = this.state;
        return (
            <SigninPresenter
                email={email}
                classes={classes}
            />
        )
    }
}
