import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Link, useNavigate} from 'react-router-dom';
import {ChangeEvent, FormEvent, useState} from "react";
import * as FirebaseAuthService from "../../../authService/FriebaseAuthService.ts"
import TopNavBar from "../../component/TopNavBar.tsx";
import {Paper} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import fishy from "../../component/large-spotted-red-carp-koi-fish-swims-shady-pond-clear-sunny-day-view-from.jpg"



export default function RegisterPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
    const [emailError, setEmailError] = useState("");


    const navigate = useNavigate();

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(event.target.value);
        setEmailError("");
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        if (newPassword.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
        } else {
            setPasswordError("");
        }
    };

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newPassword = event.target.value;
        setConfirmPassword(newPassword);

        if (newPassword !== password) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }
    };



    const handleSignup = async (event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            return;
        }
        if (confirmPassword !== password) {
            setConfirmPasswordError("Passwords do not match");
            return;
        }
        const signupResult = await FirebaseAuthService.handleSignupWithEmailAndPassword(email, password)
        if (signupResult) {
            navigate("/login");
        } else {
            setEmailError("Someone has already used this email");
        }
    }



    return (

        <Box sx={{backgroundImage: `url(${fishy})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
                   component="main"  height={"100vh"} >

            <TopNavBar/>
    <CssBaseline/>
    <Box
        sx={{
        marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
    }}
>


        <Paper  component="form" noValidate elevation={0} onSubmit={handleSignup} sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: "20px",
            backdropFilter: 'blur(8px)',
            width:"400px", mt: 3, textAlign: "center", padding:"20px"}}>
            <Typography variant="h4">
                <FontAwesomeIcon icon={faLeaf} style={{color: "#154406",}} />
            </Typography>
            <Typography variant="h4"
                        fontWeight="bold" color={"#154406"}
                sx={{
                    mb: '30px',
                }}
            >
                Create account
            </Typography>
        <TextField
            fullWidth
    id="email"
    label="Email"
    name="email"
    autoComplete="email"
    value={email}
    onChange={handleEmailChange}
    error={Boolean(emailError)}
    helperText={emailError}
            sx={{mb: "20px"}}
    />
        <TextField
            fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="new-password"
    value={password}
    error={!!passwordError}
    helperText={passwordError}
    onChange={handlePasswordChange}
            sx={{mb: "20px"}}
    />
        <TextField
            fullWidth
    name="confirmPassword"
    label="Confirm Password"
    type="password"
    id="confirmPassword"
    autoComplete="new-password"
    value={confirmPassword}
    error={!!confirmPasswordError}
    helperText={confirmPasswordError}
    onChange={handleConfirmPasswordChange}
    />

    <Button
    type="submit"
    fullWidth
    color={"success"}
    variant="contained"
    sx={{ height: 50, mt: 3}}
>
    Create account
    </Button>
    <Typography
        variant="body1"
    sx={{
        fontWeight: 400,
            lineHeight: "22.44px",
            textAlign: "center",
            color: "darkolivegreen",
            mt: 2,
    }}
>
    Already have an account?
        <Link
            to="/login"
        style={{
        marginLeft: 3,
            color: 'blue',
    }}
>
    Login here
    </Link>
    </Typography>
    </Paper>
    </Box>
    </Box>
)
}