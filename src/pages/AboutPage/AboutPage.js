import React from 'react';
import {useTheme} from "@material-ui/core";
/** @jsx jsx  */
import {jsx, css} from "@emotion/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import {AboutPageItems} from "./AboutPageItems/AboutPageItems";

export const AboutPage = () => {
    const theme = useTheme();
    const styles = {
        root: css`
      font-family: 'Roboto', sans-serif;
      display: flex;
      flex-direction: column;
      width: 100%;      
      justify-content: center;         
      margin: 0 auto;
      padding: ${theme.spacing(2)}px ${theme.spacing(4)}px;
    `,
        welcome: css`
            width: 100%;            
            padding: 20px;
            margin-top: ${theme.spacing(5)}px;
        `,
    }

    return (
        <div css={styles.root}>
            <Container css={styles.welcome}>
                <Typography variant='h5' gutterBottom>
                    About our Password Advisor
                </Typography>
                <AboutPageItems/>
            </Container>
        </div>
    );
}