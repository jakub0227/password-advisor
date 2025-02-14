import React from 'react';
import Paper from "@material-ui/core/Paper";
/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import useTheme from "@material-ui/core/styles/useTheme";
import {Typography} from "@material-ui/core";

export const Footer = () => {
    const theme = useTheme()
    const styles = {
        root: css`
            width: 100%;
            padding: ${theme.spacing(1.5)}px;
        `,
    }

    return (
        <Paper square elevation={1} css={styles.root} component='footer'>
            <Typography align='center' variant='subtitle1'>
                (C) Copyright {new Date().getFullYear()}
            </Typography>
        </Paper>
    );
};