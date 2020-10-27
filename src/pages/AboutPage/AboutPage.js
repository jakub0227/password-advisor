import React from 'react';
import {useTheme} from "@material-ui/core";
/** @jsx jsx  */
import {jsx, css} from "@emotion/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export const AboutPage = () => {
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
        welcome: css`
            width: 100%;            
            padding: 20px;
            margin-top: ${theme.spacing(5)} px;
        `,
    }

    return (
        <div css={styles.root}>
            <Container css={styles.welcome}>
                <Typography variant='h5' gutterBottom>
                    About our Password Advisor
                </Typography>
                <Typography variant='h6' gutterBottom>
                    Legal disclaimer:
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Container>
        </div>
    );
}