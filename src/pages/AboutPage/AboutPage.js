import React from 'react';
import {AccordionSummary, useTheme} from "@material-ui/core";
/** @jsx jsx  */
import {jsx, css} from "@emotion/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
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
                <Accordion>
                    <AccordionSummary>
                        <Typography>
                            Legal disclaimer
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eius eveniet facere
                            illum ipsam iure optio quaerat quod, repellendus saepe sint velit voluptatem, voluptates!
                            Accusamus accusantium aperiam delectus dicta dolor hic inventore laudantium, modi mollitia
                            nam nobis optio repudiandae sunt.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </div>
    );
}