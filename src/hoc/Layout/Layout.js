import React from "react";
import {useTheme} from "@material-ui/core";
import {Navigation} from "./Navigation/Navigation";
/** @jsx jsx  */
import {jsx, css} from "@emotion/core";
import {GlobalStyle} from "./GlobalStyle/GlobalStyle";
import {Footer} from "./Footer/Footer";

export const Layout = (props) => {
    const theme = useTheme();
    const styles = {
        root: css`
      font-family: Roboto, sans-serif;
      display: flex;
      max-width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    `,
        nav: css`
      max-width: 100%;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: ${theme.spacing(2)}px ${theme.spacing(4)}px;
    `,
        page: css`
        width: 100%;  
        text-align: center;
      `,
    };

    return (
        <div css={styles.root}>
            <GlobalStyle/>
            <Navigation css={styles.nav}/>
            <section css={styles.page}>{props.children}</section>
            <Footer/>
        </div>
    );
};
