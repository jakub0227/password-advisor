import React, {Fragment} from 'react';
import HomePageLogo from "../../pages/HomePage/HomePageLogo/HomePageLogo.jpg";
import Container from "@material-ui/core/Container";
import {useTheme} from "@material-ui/core";
/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types'


export const Welcome = (props) => {
    const theme = useTheme();
    const styles = {
        picture: css`
            margin: ${theme.spacing(3)}px auto;
            max-width: 80%;
            max-height: 250px;
            border-radius: 25px;
            object-fit: cover;
`
    }
    return (
        <Fragment>
            <img css={styles.picture} src={props.image} alt={props.imageAlt}/>
            <Container>
                <Typography gutterBottom={true} variant='h5'>
                    {props.title}
                </Typography>
            </Container>
        </Fragment>
    );
};

Welcome.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string
}