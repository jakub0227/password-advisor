import React from 'react';
import {NavigationItem} from "./NavigationItem/NavigationItem";


const PAGES = [
    {name: 'Home', icon: 'home', link: '/'},
    {name: 'Is it safe?', icon: 'lock', link: '/advisor'},
    {name: 'About', icon: 'info', link: '/about'}
]


export const NavigationItems = () => {
    return (
        <div>
            {PAGES.map(page => (
                <NavigationItem key={page.name}
                                {...page}/>
            ))}
        </div>
    );
};