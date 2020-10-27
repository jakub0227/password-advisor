import React from 'react';
import {Layout} from "./hoc/Layout/Layout";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {AdvisorPage} from "./pages/AdvisorPage/AdvisorPage";
import {AboutPage} from "./pages/AboutPage/AboutPage";

export const App = () => {
    // const theme = useTheme()


    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    <Route path="/advisor" exact>
                        <AdvisorPage/>
                    </Route>
                    <Route path="/about" exact>
                        <AboutPage/>
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};