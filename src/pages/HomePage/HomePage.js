import React, {useState} from 'react';
import {Stepper, Step, StepLabel, Button, Typography} from '@material-ui/core/';
import {useTheme} from "@material-ui/core";
/** @jsx jsx  */
import {jsx, css} from "@emotion/core";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import HomePageLogo from "../../pages/HomePage/HomePageLogo/HomePageLogo.jpg"


export const HomePage = () => {
    const theme = useTheme();
    const styles = {
        root: css`
            width: 100%;
            margin-top: ${theme.spacing(10)} px;          
        `,
        welcome: css`
            width: 100%;            
            padding: 20px;
            margin-top: ${theme.spacing(5)} px;
        `,
        backButton: css`
            margin-right: ${theme.spacing(1)} px;            
        `,
        instructions: css`
            margin-top: ${theme.spacing(1)} px;
            margin-bottom: ${theme.spacing(1)} px;
        `,
        logo: css`
            padding: ${theme.spacing(10)}px;
`,
        picture: css`
            max-height: 25%;
            max-width: 25%;
`


    };

    const getSteps = () => {
        return ['Pick a password !', 'Now test it ! How strong is it ?', 'Stay safe & protected !'];
    }
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <h4>Selecting strong and secured password is always a drama...</h4>
            case 1:
                return <h4>Try our Password-Advisor App to check if its safe !</h4>
            case 2:
                return <h4>Remember! Dont give your password to anyone and please change it frequently !</h4>
            default:
                return 'Unknown stepIndex';
        }
    }
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div css={styles.root}>
            <div css={styles.logo}>
                <img css={styles.picture} src={HomePageLogo} alt={HomePageLogo}/>
            </div>
            <Container css={styles.welcome}>
                <Typography gutterBottom={true}/>
                <h2>Let me explain you how our app works:</h2>
            </Container>
            <Stepper css={styles.root} activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography css={styles.instructions}><h3>Simple!</h3></Typography>
                    </div>
                ) : (
                    <div>
                        <Typography css={styles.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={styles.backButton}
                            >
                                Back
                            </Button>
                            {activeStep === steps.length - 1 ?
                                (<Button variant="contained"
                                         color="primary"
                                         component={Link}
                                         to={'/advisor'}>
                                        Click to proceed
                                    </Button>
                                ) : (
                                    <Button variant="contained"
                                            color="primary"
                                            onClick={handleNext}>
                                        Next
                                    </Button>
                                )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

