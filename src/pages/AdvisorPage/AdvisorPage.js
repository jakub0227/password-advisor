import React, {useState} from 'react';
import LinearProgress from "@material-ui/core/LinearProgress";
import TextField from "@material-ui/core/TextField";
import {createMuiTheme, useTheme} from "@material-ui/core";
/** @jsx jsx  */
import {jsx, css} from "@emotion/core";
import Typography from "@material-ui/core/Typography";
import logo from '../../assets/logo.jpg';
import {ThemeProvider} from "@material-ui/styles";
import {Welcome} from "../../components/Welcome/Welcome";


export const AdvisorPage = () => {
    const theme = useTheme();
    const styles = {
        root: css`
      font-family: Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      width: 100%;      
      justify-content: center;            
      margin: 0 auto;
      padding: ${theme.spacing(2)}px ${theme.spacing(4)}px;
    `,
        form: css`
      width: 100%;
      margin: 0 auto;
      padding: ${theme.spacing(2)}px ${theme.spacing(4)}px;

`,
        bar: css`
    padding: ${theme.spacing(2)}px;
    border-radius: 10px;      
`
    }
    const [password, setPassword] = useState('')

    const evaluateStrength = (passValue) => {
        let score = 0;

        if (passValue.length > 10) {
            score += 2;
        }

        if (/[0-9]/.test(passValue)) {
            score += 1;
        }

        if (/[a-z]/.test(passValue)) {
            score += 1;
        }

        if (/[A-Z]/.test(passValue)) {
            score += 3;
        }

        if (/[$&*!#@]/.test(passValue)) {
            score += 5;
        }

        return score;
    }

    const handleOnChange = (e) => {
        setPassword(e.target.value)
    }

    const passwordScore = evaluateStrength(password)

    const calculateColor = (passwordScore) => {
        if (passwordScore <= 4)
            return ('#d00000')
        if (passwordScore >= 4 && passwordScore <= 5)
            return '#bc6a08'
        if (passwordScore >= 5 && passwordScore <= 10)
            return '#f6e921'
        if (passwordScore >= 10)
            return '#77ff00'
    }

    return (
        <div css={styles.root}>
            {/*<div css={styles.logo}>*/}
            {/*    <img css={styles.picture} src={logo} alt={logo}/>*/}
            {/*</div>*/}
            {/*<Typography gutterBottom={true}/>*/}
            {/*<h2>Please try your password down below:</h2>*/}
            <Welcome image={logo} imageAlt='ghostHacker' title='Please try your password down below:'/>

            <div css={styles.form}>
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    onChange={handleOnChange}
                    helperText="TIP: Password should be greater than 10 characters, have at least one capital letter, contain a number, and special character"
                />
            </div>
            <Typography variant='subtitle1' gutterBottom>Password strength: {evaluateStrength(password)}</Typography>
            <ThemeProvider theme={createMuiTheme({
                palette: {
                    primary: {
                        main: calculateColor(passwordScore)
                    }
                }
            })}>
                <div>
                    <LinearProgress css={styles.bar}
                                    color='primary'
                                    variant='determinate'
                                    value={passwordScore / 12 * 100}
                    />
                </div>
            </ThemeProvider>
        </div>
    )
}