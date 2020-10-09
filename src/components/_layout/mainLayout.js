import React from 'react';
import {Container} from "react-bootstrap";
import styles from '../../styles/_layout/mainLayout.module.scss';
import Header from "./Header/header";

function MainLayout(props) {
    return (
        <Container className={styles.main}>
            <Header/>
            <div className={styles.content}>
                {props.children}
            </div>
        </Container>
    );
}

export default MainLayout;