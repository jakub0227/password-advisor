import React from 'react';
import {Button, Icon} from "@material-ui/core";
import {Link} from "react-router-dom";


export const NavigationItem = (props) => {
    return (
        <Button component={Link} to={props.link} startIcon={<Icon>{props.icon}</Icon>}
                color='inherit'>
            {props.name}
        </Button>
    );
};