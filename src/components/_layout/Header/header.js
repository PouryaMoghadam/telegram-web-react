import React from 'react';
import {Row, Col} from 'react-bootstrap';
import styles from '../../../styles/_layout/header.module.scss'
import Icon from "../../_shared/Base/Icon";
import MenuIcon from '../../../assets/icons/menu-icon.svg'
import setting from '../../../localDB/setting.json'

function Header(props) {
    return (
        <header className={styles.wrapper}>
            <Row>
                <Col lg={4} className={styles.menu}>
                    <Icon src={MenuIcon} className={styles.menuIcon}/>
                    <span>{setting.general["short-name"]}</span>
                </Col>
                <Col lg={8}>
                    chat search
                </Col>
            </Row>
        </header>
    );
}

export default Header;