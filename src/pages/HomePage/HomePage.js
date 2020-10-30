import React, {useState} from 'react';
import {Stepper, Step, StepLabel, Button, Typography} from '@material-ui/core';
import {useTheme} from "@material-ui/core";
/** @jsx jsx  */
import {jsx, css} from "@emotion/core";
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import HomePageLogo from "../../pages/HomePage/HomePageLogo/HomePageLogo.jpg"
import {Welcome} from "../../components/Welcome/Welcome";


export const HomePage = () => {
    const theme = useTheme();
    const styles = {
        root: css`
            width: 100%;
            margin-top: ${theme.spacing(10)} px;          
        `,

        backButton: css`
            margin-right: ${theme.spacing(1)} px;            
        `,
        instructions: css`
            margin-top: ${theme.spacing(1)} px;
            margin-bottom: ${theme.spacing(1)} px;
        `,

    };

    const getSteps = () => {
        return ['Pick a password !', 'Now test it ! How strong is it ?', 'Stay safe & protected !'];
    }
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return 'Selecting strong and secured password is always a drama...'
            case 1:
                return 'Try our Password-Advisor App to check if its safe !'
            case 2:
                return 'Remember! Dont give your password to anyone and please change it frequently !'
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
            <Welcome image={HomePageLogo} imageAlt='glasses' title='Let me explain you how our app works:'/>
            <Stepper css={styles.root} activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                <div>
                    <Typography gutterBottom variant='h6'
                                css={styles.instructions}>{getStepContent(activeStep)}</Typography>
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
                                    Proceed
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
            </div>
        </div>
    );
}

