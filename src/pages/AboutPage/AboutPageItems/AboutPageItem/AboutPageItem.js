import React from 'react';
import {AccordionSummary} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";

export const AboutPageItem = (props) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary expandIcon={<Icon>{props.icon}</Icon>}>
                    <Typography>
                        {props.name}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.text}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};