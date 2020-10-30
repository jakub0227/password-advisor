import React from 'react';
import {AboutPageItem} from "./AboutPageItem/AboutPageItem";


const ACCORDIONS = [
    {
        name: 'Legal Disclaimer and Data Protection',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eius eveniet facere illum ipsam iure optio quaerat quod, repellendus saepe sint velit voluptatem, voluptates! Accusamus accusantium aperiam delectus dicta dolor hic inventore laudantium, modi mollitia nam nobis optio repudiandae sunt.',
        icon: 'expand_more'
    },
    {
        name: 'Copyright, License and Trademarks',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eius eveniet facere illum ipsam iure optio quaerat quod, repellendus saepe sint velit voluptatem, voluptates! Accusamus accusantium aperiam delectus dicta dolor hic inventore laudantium, modi mollitia nam nobis optio repudiandae sunt.',
        icon: 'expand_more'
    }
]

export const AboutPageItems = () => {

    return (
        <div>
            {ACCORDIONS.map(accordion => (
                <AboutPageItem key={accordion.name}
                               {...accordion}/>
            ))}
        </div>
    );
};