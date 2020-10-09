import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styles from '../../../styles/_layout/header.module.scss'

function Header(props) {
    return (
        <header className={styles.wrapper}>
            <Row>
                <Col lg={4}>
                    menu tele
                </Col>
                <Col lg={8}>
                    chat search
                </Col>
            </Row>
        </header>
    );
}

export default Header;