import {ChangeEvent, FormEvent, useContext, useEffect, useState} from "react";
import {Alert, Box, Divider, Paper, TextField} from "@mui/material";
import TopNavBar from "../../component/TopNavBar.tsx";
import Button from "@mui/material/Button";
import * as FirebaseAuthService from "../../../authService/FriebaseAuthService.ts"
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {UserData} from "../../../data/user/UserData.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import {GoogleLoginButton} from "react-social-login-buttons";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false)
    const loginUser = useContext<UserData | null | undefined>(LoginUserContext);

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event :  FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email, password);
        if(loginResult) {
            navigate(-1);
        } else {
            setIsLoginFailed(true)
        }
    };

    const handleGoogleSignIn = async () => {
       if  ( await FirebaseAuthService.handleSignInWithGoogle()) {
           navigate(-1);
       }
    }

    useEffect(() => {
        if(loginUser){
            navigate("/")
        }
    }, [loginUser]);

    return (
        <>
            <TopNavBar/>

            <Box display={"flex"} justifyContent={"center"} >

                <Paper component={"form"} onSubmit={handleSubmit} sx={{width:"400px",
                px: 3,
                py:3,
                mt: 6,
                height: "fit-content"}} elevation={12} square={false}>
                    <Box textAlign={"center"}>
                        <Typography variant="h4">
                            <FontAwesomeIcon icon={faLeaf} style={{color: "#154406",}} />
                        </Typography>

                    </Box>

                    <Box textAlign={"center"}>
                        <Typography variant="h4"
                                    fontWeight="bold" color={"#154406"}>
                            Connect to your account
                        </Typography>
                    </Box>

            <Box   sx={{alignItems:"center", justifyContent:"center"}}>

                {
                    isLoginFailed &&
                    <Alert severity={"error"} sx={{mb:3}}>Login Failed</Alert>
                }

                <Box my={3}>
                    <TextField type={"email"} color={"success"} label="Email" variant="outlined" fullWidth onChange={handleEmailChange}/>
                </Box>
                <Box my={3}>
                    <TextField type={"password"} color={"success"} label="Password" variant="outlined" fullWidth onChange={handlePasswordChange}/>
                </Box>
                <Box my={3}>
                    <Button type="submit" sx={{ borderRadius: '16px' }} variant={"contained"} color={"success"} fullWidth>Login</Button>
                    <Divider sx={{my:2}}/>
                    <GoogleLoginButton onClick={handleGoogleSignIn}/>
                </Box>
            </Box>

                </Paper>
                </Box>

        </>
    );
}